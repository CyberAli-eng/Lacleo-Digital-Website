import requests
import csv
import pandas as pd
from io import StringIO
import re
from concurrent.futures import ThreadPoolExecutor, as_completed
from tqdm import tqdm   # pip install tqdm

def is_valid_url(url):
    return (
        str(url).startswith("http://")
        or str(url).startswith("https://")
        or re.match(r"^(www\.)?[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$", str(url))
    )

def normalize_url(url):
    url = str(url).strip()
    if not url.startswith(("http://", "https://")):
        return "http://" + url
    return url

def is_website_active(url):
    headers = {"User-Agent": "Mozilla/5.0"}
    try:
        response = requests.head(url, headers=headers, timeout=5, allow_redirects=True)
        if 200 <= response.status_code < 400:
            return True
        response = requests.get(url, headers=headers, timeout=5, allow_redirects=True)
        return 200 <= response.status_code < 400
    except requests.exceptions.RequestException:
        return False

def get_links_from_sheet(sheet_url):
    print("[INFO] Fetching Google Sheet data...")
    sheet_id = sheet_url.split("/d/")[1].split("/")[0]
    csv_url = f"https://docs.google.com/spreadsheets/d/{sheet_id}/export?format=csv&gid=108189750"

    response = requests.get(csv_url, timeout=10)
    response.raise_for_status()
    df = pd.read_csv(StringIO(response.text))

    if "Website" not in df.columns:
        raise ValueError("No column named 'Website' found in the sheet.")
    
    print(f"[INFO] Loaded {len(df)} rows from sheet")
    return df["Website"].dropna().tolist()

def write_to_csv(active_links, inactive_links, invalid_links):
    print("[INFO] Writing results to website_status.csv ...")
    with open("website_status.csv", mode="w", newline="", encoding="utf-8") as file:
        writer = csv.writer(file)
        writer.writerow(["Active Websites"])
        for link in active_links:
            writer.writerow([link])
        writer.writerow([])
        writer.writerow(["Inactive Websites"])
        for link in inactive_links:
            writer.writerow([link])
        writer.writerow([])
        writer.writerow(["Invalid Entries"])
        for link in invalid_links:
            writer.writerow([link])
    print("[INFO] Writing completed.")

def process_link(link):
    link = str(link).strip()
    if not is_valid_url(link):
        return ("invalid", link)

    url = normalize_url(link)
    if is_website_active(url):
        return ("active", url)
    else:
        return ("inactive", url)

def main():
    sheet_url = "https://docs.google.com/spreadsheets/d/1Aw2gNGi9lDYKLWO8IQzSwA2lOvTxPiQZRRr51GB3u1c/edit?gid=108189750#gid=108189750"
    links = get_links_from_sheet(sheet_url)

    active_links, inactive_links, invalid_links = [], [], []

    print(f"[INFO] Starting validation of {len(links)} links...")

    with ThreadPoolExecutor(max_workers=100) as executor:
        futures = [executor.submit(process_link, link) for link in links]

        for future in tqdm(as_completed(futures), total=len(futures), desc="Checking links"):
            status, link = future.result()
            if status == "active":
                active_links.append(link)
            elif status == "inactive":
                inactive_links.append(link)
            else:
                invalid_links.append(link)

    print(f"[INFO] Completed checking {len(links)} links.")
    print(f"[RESULT] Active: {len(active_links)}, Inactive: {len(inactive_links)}, Invalid: {len(invalid_links)}")

    write_to_csv(active_links, inactive_links, invalid_links)

if __name__ == "__main__":
    main()

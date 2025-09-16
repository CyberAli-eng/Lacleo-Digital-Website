import requests
import csv
import pandas as pd
from io import StringIO
import re

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
        # fallback: try GET if HEAD failed
        response = requests.get(url, headers=headers, timeout=5, allow_redirects=True)
        return 200 <= response.status_code < 400
    except requests.exceptions.RequestException:
        return False

def get_links_from_sheet(sheet_url):
    sheet_id = sheet_url.split("/d/")[1].split("/")[0]
    csv_url = f"https://docs.google.com/spreadsheets/d/{sheet_id}/export?format=csv&gid=108189750"

    response = requests.get(csv_url, timeout=10)
    response.raise_for_status()
    df = pd.read_csv(StringIO(response.text))

    if "Website" not in df.columns:
        raise ValueError("No column named 'Website' found in the sheet.")
    return df["Website"].dropna().tolist()

def write_to_csv(active_links, inactive_links, invalid_links):
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

def main():
    sheet_url = "https://docs.google.com/spreadsheets/d/1Aw2gNGi9lDYKLWO8IQzSwA2lOvTxPiQZRRr51GB3u1c/edit?gid=108189750#gid=108189750"
    links = get_links_from_sheet(sheet_url)

    active_links, inactive_links, invalid_links = [], [], []

    for link in links:
        link = str(link).strip()
        print(link)
        if is_valid_url(link):
            url = normalize_url(link)
            if is_website_active(url):
                active_links.append(url)
                print(link)

            else:
                inactive_links.append(url)
                print(link)

        else:
            print(f"Skipping invalid or non-URL: {link}")
            invalid_links.append(link)
            print(link)

    write_to_csv(active_links, inactive_links, invalid_links)

if __name__ == "__main__":
    main()

import requests

def search_movie(title, api_key):
    base_url = "http://www.omdbapi.com/"
    params = {"t": title, "apikey": api_key}

    response = requests.get(base_url, params=params)
    data = response.json()

    if data["Response"] == "True":
        print("Title:", data["Title"])
        print("Year:", data["Year"])
        print("Genre:", data["Genre"])
        print("Director:", data["Director"])
        print("Plot:", data["Plot"])
    else:
        print("Movie not found.")

def main():
    api_key = "e3142db9"

    while True:
        print("\n--- Movie Database ---")
        title = input("Enter a movie title (or type 'q' to quit): ")

        if title == 'q':
            break

        search_movie(title, api_key)

if __name__ == "__main__":
    main()

import requests

# Define the API endpoint URL
url = 'https://api.deepgram.com/v1/listen?model=nova-2&smart_format=true'

# Define your Deepgram API key
api_key = '48813c60bfd89001ae26cd32cc16042c39f774e5'

# Define the headers
headers = {
    'Authorization': f'Token {api_key}',
    'Content-Type': 'application/json'
}

PATH = "../data/"

# Call this function and a txt file is generated containing transcripts of the week
def get_weekly_transcripts():
    #podcasts from the recent week
    recent_week_audios = ["https://traffic.omny.fm/d/clips/de62ff84-6498-49d0-a266-a9d50120c712/6b814c2f-604a-4ef9-90ed-ab0900403795/f1c754db-32ef-4d3a-9c9a-b15b004363c1/audio.mp3?utm_source=Podcast&in_playlist=e6b2e450-18e4-4826-b7f2-ab0900403795", "https://traffic.omny.fm/d/clips/de62ff84-6498-49d0-a266-a9d50120c712/6b814c2f-604a-4ef9-90ed-ab0900403795/17110e6f-86f7-4a7a-8df0-b15b004652e5/audio.mp3?utm_source=Podcast&in_playlist=e6b2e450-18e4-4826-b7f2-ab0900403795", "https://traffic.omny.fm/d/clips/de62ff84-6498-49d0-a266-a9d50120c712/6b814c2f-604a-4ef9-90ed-ab0900403795/036e6d6d-26fd-4709-9335-b15c003a0fd1/audio.mp3?utm_source=Podcast&in_playlist=e6b2e450-18e4-4826-b7f2-ab0900403795", "https://traffic.omny.fm/d/clips/de62ff84-6498-49d0-a266-a9d50120c712/6b814c2f-604a-4ef9-90ed-ab0900403795/8f3b2038-ebc6-4aa5-817f-b15c003df484/audio.mp3?utm_source=Podcast&in_playlist=e6b2e450-18e4-4826-b7f2-ab0900403795", "https://traffic.omny.fm/d/clips/de62ff84-6498-49d0-a266-a9d50120c712/6b814c2f-604a-4ef9-90ed-ab0900403795/8b461a00-a4fe-48ad-8e33-b15e00439d54/audio.mp3?utm_source=Podcast&in_playlist=e6b2e450-18e4-4826-b7f2-ab0900403795", "https://traffic.omny.fm/d/clips/de62ff84-6498-49d0-a266-a9d50120c712/6b814c2f-604a-4ef9-90ed-ab0900403795/8b461a00-a4fe-48ad-8e33-b15e00439d54/audio.mp3?utm_source=Podcast&in_playlist=e6b2e450-18e4-4826-b7f2-ab0900403795"]
    n = 1
    for daily_audio in recent_week_audios:
        # Define the data payload
        payload = {
        'url': daily_audio
        }
        # Make the POST request
        response = requests.post(url, json=payload, headers=headers)
        # Check if the request was successful (HTTP status code 200)
        if response.status_code == 200:
            # Print the response data
            content = str(response.json()["results"]["channels"][0]['alternatives'][0]["transcript"])
            with open(PATH+"transcript_"+str(n)+".txt", 'a') as file:
                file.write(content + "\n\n")

            print('Content saved to ' + PATH+"transcript_"+str(n)+".txt")
            n += 1
        else:
            # Print the error message
            print(f'Error: {response.status_code} - {response.text}')

get_weekly_transcripts()
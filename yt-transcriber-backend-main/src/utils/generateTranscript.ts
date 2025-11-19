import { ApifyClient } from 'apify-client';

const client = new ApifyClient({
  token: Bun.env.APIFY_API_TOKEN,
})

// (async () => {
//     // Run the Actor and wait for it to finish
//     const run = await client.actor("dB9f4B02ocpTICIEY").call(input);

//     // Fetch and print Actor results from the run's dataset (if any)
//     console.log('Results from dataset');
//     const { items } = await client.dataset(run.defaultDatasetId).listItems();
//     items.forEach((item) => {
//         console.dir(item);
//     });
// })();

export const getYoutubeTranscript = async (url: string) => {
  const input = {
    "startUrls": [
        url
    ],
    "language": "Default",
    "includeTimestamps": "No"
  };
  const run = await client.actor("dB9f4B02ocpTICIEY").call(input);

  const { items } = await client.dataset(run.defaultDatasetId).listItems();
  return items[0].transcript as string;
};

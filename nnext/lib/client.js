import {createClient} from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: 'flezlwf9',
  dataset: 'production',
  apiVersion: '2023-03-28',
  useCdn: true,
  token: "skgdHV6kPugjGwT0HwCvVeSHdAiZho7JXPmL2KvtP1ffF08In0ydrIgrsrgMKobDDPTXtBn2bFt8aoSHHMmjWHZ7bgoOLHO3SS3N3cysbdoIVTwvb2QmDjkicTRNMTyDucbkkLuTdBzDnsflgWisRcvtMfHq7iNeDSJvXQAX6sFPl8rsBwuV"
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
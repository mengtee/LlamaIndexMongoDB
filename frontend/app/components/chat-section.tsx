"use client";

import { useChat } from "ai/react";
import { useMemo } from "react";
import { insertDataIntoMessages } from "./transform";
import { ChatInput, ChatMessages } from "./ui/chat";

export default function ChatandPodcastSection() {
  const {
    messages,
    input,
    isLoading,
    handleSubmit,
    handleInputChange,
    reload,
    stop,
    data,
  } = useChat({
    api: process.env.NEXT_PUBLIC_CHAT_API,
    headers: {
      "Content-Type": "application/json", // using JSON because of vercel/ai 2.2.26
    },
  });

  const transformedMessages = useMemo(() => {
    return insertDataIntoMessages(messages, data);
  }, [messages, data]);

  return (
    <div className="flex w-full space-x-4">
      <div className="space-y-4 max-w-5xl flex-1">
      <h4 className="text-3xl font-thin">Chat with the data here.</h4>
        <ChatMessages
          messages={transformedMessages}
          isLoading={isLoading}
          reload={reload}
          stop={stop}
        />
        <ChatInput
          input={input}
          handleSubmit={handleSubmit}
          handleInputChange={handleInputChange}
          isLoading={isLoading}
          multiModal={process.env.NEXT_PUBLIC_MODEL === "gpt-4-vision-preview"}
        />
      </div>
      <div>
        <h4 className="text-3xl font-thin mb-4">Catch up with last week's episode.</h4>
        <div className=" h-[70vh] flex-1 overflow-scroll ">
          <iframe className="rounded-md scale-90" src="https://omny.fm/shows/market-watch/us-corporate-results-driving-market-sentiment/embed?style=Cover" width="100%" height="160px" allow="autoplay; clipboard-write" frameborder="0" title="US Corporate Results Driving Market Sentiment"></iframe>
          <iframe className="rounded-md scale-90" src="https://omny.fm/shows/market-watch/the-fed-still-cutting-rates/embed?style=Cover" width="100%" height="160px"  allow="autoplay; clipboard-write" frameborder="0" title="The Fed Still Cutting Rates"></iframe>
          <iframe className="rounded-md scale-90" src="https://omny.fm/shows/market-watch/china-evs-ready-for-global-domination/embed?style=Cover" width="100%" height="160px" allow="autoplay; clipboard-write" frameborder="0" title="China EVs Ready For Global Domination?"></iframe>
          <iframe className="rounded-md scale-90" src="https://omny.fm/shows/market-watch/us-earnings-season-matters/embed?style=Cover" width="100%" height="160px" allow="autoplay; clipboard-write" frameborder="0" title="US Earnings Season Matters"></iframe>
          <iframe className="rounded-md scale-90" src="https://omny.fm/shows/market-watch/indonesia-still-the-land-of-opportunity/embed?style=Cover" width="100%" height="160px" allow="autoplay; clipboard-write" frameborder="0" title="Indonesia: Still the Land of Opportunity "></iframe>
        </div>
      </div>
      
    </div>
  );
}

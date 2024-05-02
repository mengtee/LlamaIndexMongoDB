export default function TeamIntroduction() {
    return (
      <div className="flex flex-col justify-center items-center h-1/4screen text-center">
        {/* Project Introduction Section */}
        <section className="space-y-5 project-introduction px-4">
          <h2 className="text-5xl font-thin">
            Financial Insights from <span className="text-customHighlight"> the BFM Podcast Series: The Market Watch </span> <span className="text-customHighlight"></span>
          </h2>
          <p className="mt-4 mb-4">
            Welcome to our project! Here, we are creating a chatbot to interact and cover podcast of financial content from BFM that you missed in the past week!
          </p>
        </section>
      </div>
    );
  }
  
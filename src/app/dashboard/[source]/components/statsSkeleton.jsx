export default function StatsSkeleton() {
  return (
    <div className=" card  bg-neutral text-base-content rounded-t-none  ">
      <div className="card-body py-2">
        <p className="text-xs">
          <span className="font-bold">sentences:</span>{" "}
          <span className="loading loading-dots loading-xs"></span>,{" "}
          <span className="font-bold">phrasal verbs:</span>{" "}
          <span className="loading loading-dots loading-xs"></span>,{" "}
          <span className="font-bold">adverbs:</span>{" "}
          <span className="loading loading-dots loading-xs"></span>,{" "}
          <span className="font-bold">adjectives:</span>{" "}
          <span className="loading loading-dots loading-xs"></span>,{" "}
          <span className="font-bold">verbs:</span>{" "}
          <span className="loading loading-dots loading-xs"></span>,{" "}
        </p>
      </div>
    </div>
  );
}

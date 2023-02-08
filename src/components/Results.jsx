import Card from "./Card";

export default function Results({ results }) {
  return (
    <div className="grid grid-cols-2 gap-4 lg:gap-6 max-w-[95%] lg:grid-cols-3 xl:grid-cols-4 md:max-w-[85%] mx-auto py-4">
      {results.map((result) => (
        <Card key={result.id} result={result} />
      ))}
    </div>
  );
}

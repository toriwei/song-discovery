export default function Playlist({ data }) {
    console.log(data.Similar.Results.map((result) => result.Name))
  return (
    <section>
      <div>{data.Similar.Results.map((result) => <p>{result.Name}</p>)}</div>
    </section>
  );
}

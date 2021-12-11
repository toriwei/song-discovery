export default function Playlist({ data }) {
    // console.log(data);
    return (
    <section>
      <div>{data.map((result) => <p>{result.Name}</p>)}</div>
    </section>
  );
}

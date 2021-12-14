export default function Playlist({ data }) {
  // console.log(data);
  return (
    <section>
      <div>
        {data.map((result) => (
          <p key="{result.Name}">{result.Name}</p>
        ))}
      </div>
    </section>
  );
}

export default async function TestAPI() {
  const res = await fetch("http://localhost:3000/api/blogs", {
    cache: "no-store",
  });
  const blogs = await res.json();

  return (
    <pre className="p-10">
      {JSON.stringify(blogs, null, 2)}
    </pre>
  );
}

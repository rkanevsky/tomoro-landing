export async function post({ request }) {
  const formData = await request.formData();

  // This is the official Vercel Forms submission endpoint
  const res = await fetch("https://api.vercel.com/v13/forms/submit", {
    method: "POST",
    body: formData,
  });

  return new Response(null, {
    status: 302,
    headers: {
      Location: "/?success=1",
    },
  });
}

export async function post({ request }) {
  try {
    const formData = await request.formData();

    // Отправляем на официальный API Vercel Forms
    const response = await fetch("https://api.vercel.com/v13/forms/submit", {
      method: "POST",
      body: formData,
    });

    // Если всё успешно — редирект на главную
    return new Response(null, {
      status: 302,
      headers: { Location: "/?success=1" },
    });
  } catch (e) {
    console.error("Form submit error:", e);

    return new Response(JSON.stringify({ error: "Server error" }), {
      status: 500,
    });
  }
}

"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

export default function SitePage() {
  const params = useParams();
  const [html, setHtml] = useState<string | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(`/api/site/${params.id}`)
      .then((res) => {
        if (!res.ok) throw new Error("not found");
        return res.json();
      })
      .then((data) => setHtml(data.html))
      .catch(() => setError(true));
  }, [params.id]);

  if (error) {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          fontFamily: "system-ui",
          color: "#64748b",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <h1 style={{ fontSize: "2rem", color: "#1a1a2e", marginBottom: 8 }}>
            Site Not Found
          </h1>
          <p>This site may have expired or the link is invalid.</p>
          <a
            href="/"
            style={{ color: "#2563eb", textDecoration: "none", marginTop: 16, display: "inline-block" }}
          >
            &larr; Generate a new site
          </a>
        </div>
      </div>
    );
  }

  if (!html) {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          fontFamily: "system-ui",
          color: "#64748b",
        }}
      >
        Loading...
      </div>
    );
  }

  return <iframe srcDoc={html} style={{ width: "100%", height: "100vh", border: "none" }} />;
}

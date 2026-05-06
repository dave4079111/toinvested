'use client';

import { FormEvent, useState } from 'react';

export function SiteGenerator() {
  const [prompt, setPrompt] = useState('');
  const [html, setHtml] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError('');
    setHtml('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/generate-site', {
        body: JSON.stringify({ prompt }),
        headers: { 'Content-Type': 'application/json' },
        method: 'POST',
      });

      const contentType = response.headers.get('content-type') ?? '';

      if (!response.ok) {
        const payload = contentType.includes('application/json')
          ? ((await response.json()) as { error?: string })
          : null;
        throw new Error(payload?.error ?? 'Unable to generate a website concept.');
      }

      setHtml(await response.text());
    } catch (caughtError) {
      setError(caughtError instanceof Error ? caughtError.message : 'Something went wrong.');
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <form className="generator-card" onSubmit={handleSubmit}>
      <label htmlFor="prompt">Website brief</label>
      <textarea
        id="prompt"
        name="prompt"
        onChange={(event) => setPrompt(event.target.value)}
        placeholder="Example: Build a luxury realtor landing page for Miami sellers focused on home valuation leads, local SEO, proof, and a consultation call."
        rows={6}
        value={prompt}
      />
      <div className="generator-actions">
        <button className="button primary" disabled={isLoading} type="submit">
          {isLoading ? 'Generating...' : 'Generate website concept'}
        </button>
        <span className="generator-hint">Niche + city + offer + lead goal</span>
      </div>
      {error ? (
        <div className="generated-preview" role="alert">
          <strong>Generator note:</strong> {error}
        </div>
      ) : null}
      {html ? (
        <iframe
          className="generated-frame"
          sandbox=""
          srcDoc={html}
          title="Generated website concept preview"
        />
      ) : (
        <div className="generated-preview">
          <strong>Preview ready:</strong> Your generated real estate, lending, or broker website
          concept will appear here after you submit a focused brief.
        </div>
      )}
    </form>
  );
}

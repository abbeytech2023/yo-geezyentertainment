import React from "react";
import { Section } from "./AdminSections";

export default function AdminBlogsSection({
  active,
  blogForm,
  blogFormOpen,
  setBlogFormOpen,
  addBlog,
  setBlogForm,
}) {
  return (
    <div>
      {active === "blogs" && (
        <Section
          title="Blogs"
          formOpen={blogFormOpen}
          toggleForm={() => setBlogFormOpen(!blogFormOpen)}
          onSubmit={addBlog}
        >
          <input
            type="text"
            placeholder="Blog Title"
            value={blogForm.title}
            onChange={(e) =>
              setBlogForm({ ...blogForm, title: e.target.value })
            }
            className="w-full p-3 bg-zinc-800 rounded"
            required
          />
          <textarea
            placeholder="Blog Content"
            value={blogForm.content}
            onChange={(e) =>
              setBlogForm({ ...blogForm, content: e.target.value })
            }
            className="w-full p-3 bg-zinc-800 rounded"
            required
          />
        </Section>
      )}
    </div>
  );
}

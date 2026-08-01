"use client";

import React, { useEffect, useState } from "react";
import BlogEditor from "../../_components/BlogEditor";
import { Loader2 } from "lucide-react";

export default function EditBlogPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = React.use(params);
  const [blog, setBlog] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await fetch(`/api/blogs/${id}`);
        const data = await res.json();
        setBlog(data);
      } catch (error) {
        console.error("Failed to fetch blog", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-12 h-12 animate-spin text-brand-600" />
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center text-slate-500 font-bold">
        Blog not found.
      </div>
    );
  }

  return <BlogEditor initialData={blog} id={id} />;
}

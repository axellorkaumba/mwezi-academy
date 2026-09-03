import type { NextConfig } from "next";
import { withBotId } from "botid/next/config";

const nextConfig: NextConfig = {
  // Course lesson content is read from content/courses/*.md at request time
  // via fs, with a slug built dynamically — Next's file tracing can't see
  // that statically, so the folder has to be included explicitly or it's
  // missing from the deployed serverless bundle.
  outputFileTracingIncludes: {
    "/[lang]/formation/[slug]/apprendre": ["./content/courses/**"],
  },
};

export default withBotId(nextConfig);

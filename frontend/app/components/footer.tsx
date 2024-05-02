import React from'react';
import Image from "next/image";

export default function Footer() {
  return (
    <footer>
      <div>
        <div className="text-xs">
          <p>
            © 2024 Your Company Name. All rights reserved.
          </p>
          <div className="pt-1 fixed flex w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static">
            <a
              href="https://www.llamaindex.ai/"
              className="flex items-center justify-center font-nunito text-lg font-bold gap-2"
            >
            <span className="text-xs">Built by LlamaIndex</span>
            <Image
              className="rounded-sm"
              src="/llama.png"
              alt="Llama Logo"
              width={20}
              height={20}
              priority
            />
          </a>
        </div>
        </div>
      </div>
    </footer>
  );
};


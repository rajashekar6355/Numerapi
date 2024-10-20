"use client"
import { motion } from "framer-motion";

export const JoinNowButton = (props: React.PropsWithChildren) => {
  return (
    <motion.div
      className="box z-20"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 200, damping: 10 }}
    >
      <button type="submit" className="relative py-2 px-3 rounded-lg font-medium text-sm bg-gradient-to-b from-[#190d2e] to-[#4a208a] shadow-[0px_0px_12px_#8c45ff]">
        <div className="absolute inset-0">
          <div className="rounded-lg border border-white/20 absolute inset-0 [mask-image:linear-gradient(to_bottom, black, transparent)]"></div>
          <div className="rounded-lg border border-white/40 absolute inset-0 [mask-image:linear-gradient(to_top, black, transparent)]"></div>
          <div className="absolute inset-0 shadow-[0_0_10px_rgb(140,69,255,0.7)_inset] rounded-lg"></div>
        </div>
        <span>Join Now</span>
      </button>
    </motion.div>
  );
};

import React from "react";

export function StatementAscii() {
  return (
    <section className="relative py-28 md:py-36 overflow-hidden bg-card border-y border-border flex items-center justify-center">
      {/* ASCII Halftone Grid Overlay Background */}
      <div 
        className="absolute inset-0 select-none opacity-20 font-mono text-[10px] sm:text-xs leading-[10px] sm:leading-[12px] text-muted-foreground overflow-hidden pointer-events-none p-4 break-all whitespace-pre-wrap"
        aria-hidden="true"
      >
        {`$$$$^^^^*****+++++@@@###---$$$$^^^^*****+++++@@@###---$$$$^^^^*****+++++@@@###---
$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
******************************************************************************
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
##############################################################################
------------------------------------------------------------------------------
$$$$^^^^*****+++++@@@###---$$$$^^^^*****+++++@@@###---$$$$^^^^*****+++++@@@###---
$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
******************************************************************************
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@`}
      </div>

      {/* Subtle Radial Glow */}
      <div className="absolute inset-0 bg-radial from-secondary/40 via-transparent to-transparent opacity-80 pointer-events-none" />

      {/* Massive Bold Statement Typography */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center space-y-3 sm:space-y-4">
        <div className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tight text-foreground flex items-center justify-center gap-3">
          <span>Be Real</span>
          <span className="text-primary font-mono">*</span>
        </div>
        <div className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tight text-foreground flex items-center justify-center gap-3">
          <span>Be Creative</span>
          <span className="text-primary font-mono">#</span>
        </div>
        <div className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tight text-foreground flex items-center justify-center gap-3">
          <span>Be Bold</span>
          <span className="text-primary font-mono text-3xl sm:text-5xl md:text-6xl self-start mt-2">™</span>
        </div>
      </div>
    </section>
  );
}

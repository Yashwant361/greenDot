import React from "react";

function SkeletonRow() {
  return (
    <>
      <tr className="animate-pulse border-t border-gray-700">
        {Array(6)
          .fill(0)
          .map((_, index) => {
            <td key={index} className="p-3 md:p-4 whitespace-nowrap">
              <div5 className="h-5 bg-white/20 rounded" />
            </td>;
          })}
      </tr>
    </>
  );
}

export default SkeletonRow;

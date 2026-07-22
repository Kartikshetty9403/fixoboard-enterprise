import React from "react";
import { useTranslation } from "react-i18next";
import { materialComparison } from "../../data/comparisonCharts";
import { Check, X } from "lucide-react";

const ProductComparisonTable: React.FC = () => {
  const { t } = useTranslation("products");
  return (
    <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
      <table className="w-full text-left border-collapse">
        <thead className="bg-slate-50">
          <tr>
            <th className="p-5 text-sm font-bold text-slate-900 border-b border-slate-200">
              {t("features.comparison.table.feature")}
            </th>
            <th className="p-5 text-sm font-bold text-slate-500 border-b border-slate-200">
              {t("features.comparison.table.plywood")}
            </th>
            <th className="p-5 text-sm font-bold text-slate-500 border-b border-slate-200">
              {t("features.comparison.table.mdf")}
            </th>
            <th className="p-5 text-sm font-bold text-slate-500 border-b border-slate-200">
              {t("features.comparison.table.particleBoard")}
            </th>
            <th className="p-5 text-sm font-bold text-blue-600 border-b border-slate-200 bg-blue-50/50">
              {t("features.comparison.table.fixoboard")}
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {materialComparison.map((row) => (
            <tr
              key={row.key}
              className="hover:bg-slate-50/50 transition-colors"
            >
              <td className="p-5 text-sm font-medium text-slate-700">
                {t(row.featureKey)}
              </td>
              <td className="p-5 text-center">
                {row.plywood ? (
                  <Check className="text-green-500 mx-auto" size={18} />
                ) : (
                  <X className="text-red-300 mx-auto" size={18} />
                )}
              </td>
              <td className="p-5 text-center">
                {row.mdf ? (
                  <Check className="text-green-500 mx-auto" size={18} />
                ) : (
                  <X className="text-red-300 mx-auto" size={18} />
                )}
              </td>
              <td className="p-5 text-center">
                {row.particleBoard ? (
                  <Check className="text-green-500 mx-auto" size={18} />
                ) : (
                  <X className="text-red-300 mx-auto" size={18} />
                )}
              </td>
              <td className="p-5 text-center bg-blue-50/30">
                {row.fixoBoard ? (
                  <Check
                    className="text-blue-600 mx-auto stroke-[3]"
                    size={20}
                  />
                ) : (
                  <X className="text-red-300 mx-auto" size={20} />
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductComparisonTable;

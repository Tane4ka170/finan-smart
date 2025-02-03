import { Sparkles } from "lucide-react";
import React, { useEffect, useState } from "react";
import formatNumber from "../../../../../utils";

function CardInfo({ budgetList, incomeList }) {
  const [totalBudget, setTotalBudget] = useState(0);
  const [totalSpend, setTotalSpend] = useState(0);
  const [totalIncome, setTotalIncome] = useState(0);
  const [financialAdvise, setFinancialAdvise] = useState("");

  useEffect(() => {
    if (budgetList.length > 0 || incomeList.length > 0) {
      CalculateCardInfo();
    }
  }, [budgetList, incomeList]);

  useEffect(() => {
    // if (totalBudget > 0 || totalIncome > 0 || totalSpend > 0) {
    //   const fetchFinancialAdvise = async () => {
    //     const advise = await getFinancialAdvise(
    //       totalBudget,
    //       totalIncome,
    //       totalSpend
    //     );
    //   };
    //   setFinancialAdvise();
    // }
    // fetchFinancialAdvise();
  }, [totalBudget, totalIncome, totalSpend]);

  const calculateInfo = () => {
    let totalBudget_ = 0;
    let totalIncome_ = 0;
    let totalSpend_ = 0;
    budgetList.forEach((element) => {
      totalBudget_ = totalBudget_ + Number(element.amount);
      totalSpend_ = totalSpend_ + element.totalSpend;
    });
    incomeList.forEach((element) => {
      totalIncome_ = totalIncome_ + element.totalAmount;
    });
    setTotalBudget(totalBudget_);
    setTotalSpend(totalSpend_);
    setTotalIncome(totalIncome_);
  };

  return (
    <div>
      {budgetList.length > 0 ? (
        <div>
          <div className="p-7 border mt-4 rounded-2xl flex items-center justify-between">
            <div className="">
              <div className="fle mb-2 flex-row space-x-1 justify-between">
                <h2>Finan Smart AI</h2>
                <Sparkles
                  className="rounded-full text-white w-10 h-10 p-2  bg-gradient-to-r
    from-lime-500
    via-green-500
    to-emerald-500
    background-animate "
                />
              </div>
              <h2 className="font-light text-md ">
                {financialAdvise || "Fetching your financial insights..."}
              </h2>
            </div>
          </div>

          <div className="mt-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <div className="p-7 border rounded-2xl flex items-center justify-between">
              <div>
                <h2>Total Budget</h2>
                <h2>${formatNumber(totalBudget)}</h2>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default CardInfo;

const { default: OpenAI } = require("openai");

const openai = new OpenAI({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_KEY,
  dangerouslyAllowBrowser: true,
});

const getFinancialAdvise = async (totalBudget, totalIncome, totalSpend) => {
  try {
  } catch (error) {}
};

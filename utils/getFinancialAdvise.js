const { default: OpenAI } = require("openai");

const openai = new OpenAI({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_KEY,
  dangerouslyAllowBrowser: true,
});

export const getFinancialAdvise = async (
  totalBudget,
  totalIncome,
  totalSpend
) => {
  try {
    const userPrompt = ` Given the financial data:
      - Total Budget: ${totalBudget} USD 
      - Expenses: ${totalSpend} USD 
      - Incomes: ${totalIncome} USD
      Provide two sentences of personalized financial advice to help optimize spending and savings`;

    const chatCompletion = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [{ role: "user", content: userPrompt }],
    });

    const advice = chatCompletion.choices[0].message.content;

    return advice;
  } catch (error) {
    return error;
  }
};

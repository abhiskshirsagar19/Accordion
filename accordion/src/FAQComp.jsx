import FAQItem from "./FAQItem";

const FAQComp = () => {
  const faqs = [
    {
      question: "When was React first released?",
      answer: `React was first released by Facebook in 2013.`,
    },
    {
      question: " Who created React?",
      answer: "React was created by Jordan Walke, a Facebook engineer.",
    },
    {
      question: "What problem was React designed to solve?",
      answer: `React was designed to simplify UI development and improve performance.`,
    },
    {
      question: "What company maintains React?",
      answer: `React is maintained by Facebook, now known as Meta.`,
    },
    {
      question: " What major feature was introduced in React 16.8?",
      answer: `React 16.8 introduced Hooks, enabling state and lifecycle in functional components.`,
    },
  ];
  return (
    <>
      <h1>Frequently Asked Questions</h1>
      {faqs.map((faq, index) => {
        return <FAQItem faq={faq} index={index} key={index} />;
      })}
    </>
  );
};
export default FAQComp;

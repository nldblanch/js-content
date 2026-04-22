type MarkdownSummaryProps = {
  children?: React.ReactNode;
  isOpen?: boolean;
};

// The component that the `MarkdownRenderer` component
// will use for rendering <summary> elements.
// Because in HTML <summary> elements are rendered 
// as children of <details> elements, this 'MarkdownSummary'
//  component will always be rendered as a child of the 'CustomDetails'
//  component. The 'CustomDetails' component is the component that the
//  `MarkdownRenderer` component will use for rendering the <details> element.
export default function MarkdownSummary({ children, isOpen, ...props }: MarkdownSummaryProps) {

return (
    <summary
    {...props}
    className="p-4 text-gray font-fira text-xl font-bold hover:bg-white/5 transition-colors list-none flex items-center gap-4"
    >
    {/* Rotate the symbol based on the isOpen prop */}
    <span
    className={`transition-transform duration-200 inline-block ${isOpen ? "rotate-90" : "rotate-0"}`}
    aria-hidden="true"
    >
    ▶
    </span>
    {children}
    </summary>
)
}

import { Children } from "react";

const Breadcrumbs = ({ children }) => {
  const arrayChildren = Children.toArray(children);

  return (
    <ul style={{ listStyle: "none", display: "flex" }}>
      {arrayChildren.map((child, index) => {
        const isLast = index === arrayChildren.length - 1;

        if (!isLast && !child.props.link) {
          throw new Error(
            `BreadcrumbItem child no. ${
              index + 1
            } should be passed a 'link' prop`
          );
        }

        return (
          <>
            {child.props.link ? (
              <li>
                <a
                  href={child.props.link}
                  style={{ display: "inline-block", textDecoration: "none" }}
                >
                  <div style={{ marginRight: "5px" }}>{child.props.title}</div>
                </a>
              </li>
            ) : (
              <li>
                <div style={{ marginRight: "5px" }}>{child.props.title}</div>
              </li>
            )}

            {!isLast && (
              <li>
                <div style={{ marginRight: "5px" }}>&gt;</div>
              </li>
            )}
          </>
        );
      })}
    </ul>
  );
};

export default Breadcrumbs;

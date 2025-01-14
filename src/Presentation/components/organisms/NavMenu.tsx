import { Icon } from "@/Presentation/components/atoms";

export const NavMenu: React.FC = () => {
  return (
    <>
      <div className="container">
        <Icon icon="mobile" size="md" />
        <Icon icon="signin" size="md" />
        <Icon icon="bars" size="md" />
      </div>
      <style jsx>
        {`
          .container {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
          }
        `}
      </style>
    </>
  );
};

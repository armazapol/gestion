import Title from "../components/Title";
import Card from "../components/Card";
import IconAddAccount from "/img/icon-person.svg";
import IconSearchAccount from "/img/icon-search.svg";

const cards = [
  {
    icon: IconAddAccount,
    title: "Agregar nueva cuenta",
    body: "lorem ipsum dolor sit amet, consectetur adip",
    link: "/addAccount",
  },
  {
    icon: IconSearchAccount,
    title: "Buscar cuenta",
    body: "lorem ipsum dolor sit amet, consectetur adip",
    link: "/searchAccount",
  },
  {
    icon: IconSearchAccount,
    title: "Modificar datos de cuenta",
    body: "lorem ipsum dolor sit amet, consectetur adip",
    link: "/modifiedAccount",
  },
];

const Account = () => {
  return (
    <div>
      <Title text="cuentas" />
      <div className="flex flex-col gap-3">
        {cards.map((card, key) => (
          <Card
            icon={card.icon}
            title={card.title}
            body={card.body}
            link={card.link}
            key={key}
          />
        ))}
      </div>
    </div>
  );
};

export default Account;

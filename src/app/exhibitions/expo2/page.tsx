// app/exhibitions/expo2/page.tsx

const Expo2Page = () => {
  // Dados da exposição 2 (pode ser carregado estaticamente)
  const exhibition = {
    title: 'Exposição 2',
    description: 'Descrição da Exposição 2.',
    // Adicione outros dados necessários
  };

  return (
    <div>
      <h1>{exhibition.title}</h1>
    </div>
  );
};

export default Expo2Page;

class Formatter {
  currency(data: number) {
    const priceFormatted = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(data);

    return priceFormatted;
  }

  number(data: string) {
    const numberFormatted = String(data).padStart(2, "0");
    return numberFormatted;
  }
}

export const formatter = new Formatter();

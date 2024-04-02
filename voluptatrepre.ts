interface Address {
  street: string;
}

const address: Address = {
  street: "Victor Plains",
};

// Usage example
function displayAddress(addr: Address) {
  console.log(`The address is: ${addr.street}`);
}

displayAddress(address);

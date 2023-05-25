type NetworkConfigType = Record<number, {
    name: string;
    price: string;
}>;

export function fillNetworkConfigs(): NetworkConfigType {
    let listNetConfigs:NetworkConfigType = {};
    for (let index = 0; index < 5; index++) {
        listNetConfigs[index] = {
            name: "Win"+index.toString(),
            price: index.toString(),
        }
    }
    return listNetConfigs
}
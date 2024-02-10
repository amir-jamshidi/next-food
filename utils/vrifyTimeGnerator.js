const verifyTimeGnerator = (min) => {
    return Date.now() + (1000 * 60 * Number(min));
}

export default verifyTimeGnerator
const validateName = name => {
    const regex = /^[a-zA-Zа-яА-Я]{3,}$/;
    return !regex.test(name)
        ? 'Это поле должно содержать как минимум 3 символа. Числа и спец. символы не разрешены.'
        : '';
};

export default validateName;
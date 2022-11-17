console.clear();

const family = {
    name: 'Petras',
    age: 55,
    children: [
        {
            name: 'Maryte',
            age: 66,
            children: [
                {
                    name: 'Ona',
                    age: 77,
                    children: [
                        {
                            name: 'Petras',
                            age: 78
                        }, {
                            name: 'Petras',
                            age: 79
                        }, {
                            name: 'Petras',
                            age: 80
                        }
                    ],
                }
            ],
        }, {
            name: 'Jonas',
            age: 44,
            children: [
                {
                    name: 'Al',
                    age: 88,
                    children: [
                        {
                            name: 'Moliugelis',
                            age: 37,
                        }, {
                            name: 'Hipsteris',
                            age: 38
                        }
                    ],
                }
            ],
        }
    ],
};

function oldest(person) {
    let age = person.age;

    if (person.children
        && Array.isArray(person.children)
        && person.children.length > 0) {
        for (const child of person.children) {
            const childAge = oldest(child);
            if (childAge > age) {
                age = childAge;
            }
        }
    }

    return age;
}

console.log('Vyriausias:', oldest(family));
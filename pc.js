const discSize = 1_000_000;
const pc = {
    type: 'folder',
    name: 'C',
    content: [
        {
            type: 'folder',
            name: 'Programs',
            content: [
                {
                    type: 'folder',
                    name: 'Nodejs',
                    content: [
                        {
                            type: 'folder',
                            name: 'bin',
                            content: [
                                {
                                    type: 'file',
                                    name: 'node.exe',
                                    size: 1000,
                                    unit: 'b'
                                }
                            ]
                        },
                        {
                            type: 'file',
                            name: 'demo.exe',
                            size: 500,
                            unit: 'b'
                        }
                    ]
                },
                {
                    type: 'folder',
                    name: 'Paint.net',
                    content: [
                        {
                            type: 'file',
                            name: 'paintnet.exe',
                            size: 18000,
                            unit: 'b'
                        },
                        {
                            type: 'file',
                            name: 'colors.exe',
                            size: 5700,
                            unit: 'b'
                        }
                    ]
                }
            ]
        },
        {
            type: 'folder',
            name: 'Program Files 86',
            content: [
                {
                    type: 'folder',
                    name: 'Nodejs',
                    content: [
                        {
                            type: 'folder',
                            name: 'bin',
                            content: [
                                {
                                    type: 'file',
                                    name: 'node.exe',
                                    size: 1000,
                                    unit: 'b'
                                }
                            ]
                        },
                        {
                            type: 'file',
                            name: 'demo.exe',
                            size: 500,
                            unit: 'b'
                        }
                    ]
                },
                {
                    type: 'folder',
                    name: 'Paint.net',
                    content: [
                        {
                            type: 'file',
                            name: 'paintnet.exe',
                            size: 18000,
                            unit: 'b'
                        },
                        {
                            type: 'file',
                            name: 'colors.exe',
                            size: 5700,
                            unit: 'b'
                        }
                    ]
                }
            ]
        },
        {
            type: 'file',
            name: 'hello.txt',
            size: 20,
            unit: 'b'
        },
        {
            type: 'file',
            name: 'bye.txt',
            size: 666,
            unit: 'b'
        }
    ]
}

function search(term) {

}

function usedSpace() {

}

function freeSpace() {

}
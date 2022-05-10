
load('databaseInit.js');

try {
    db.functionInfo.drop();
} catch (e) {
    print (e)
}

try {
    db.functionDependency.drop();
} catch (e) {
    print (e)
}

try {
    db.testInfo.drop();
} catch (e) {
    print (e)
}

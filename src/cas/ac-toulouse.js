module.exports = ({ username, password, cas }) => require('./kdecole-wayf')({
    username,
    password,
    cas,

    acName: 'Toulouse',
    casUrl: 'https://cas.mon-ent-occitanie.fr/',
    idp: 'TOULO-ENT'
});

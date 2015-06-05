/*global require, define*/
define(function () {

    return function (server) {
    
        server.respondWith(
            "GET",   
            "/openidm/config/managed",
            [
                200, 
                {},
                "{\"objects\":[{\"name\":\"user\",\"onCreate\":{\"type\":\"text/javascript\",\"file\":\"ui/onCreate-user-set-default-fields.js\"},\"onDelete\":{\"type\":\"text/javascript\",\"file\":\"ui/onDelete-user-cleanup.js\"},\"properties\":[{\"name\":\"securityAnswer\",\"encryption\":{\"key\":\"openidm-sym-default\"},\"scope\":\"private\"},{\"name\":\"password\",\"encryption\":{\"key\":\"openidm-sym-default\"},\"scope\":\"private\"},{\"name\":\"effectiveRoles\",\"type\":\"virtual\",\"onRetrieve\":{\"type\":\"text/javascript\",\"file\":\"roles/effectiveRoles.js\",\"rolesPropName\":\"roles\"}},{\"name\":\"effectiveAssignments\",\"type\":\"virtual\",\"onRetrieve\":{\"type\":\"text/javascript\",\"file\":\"roles/effectiveAssignments.js\",\"effectiveRolesPropName\":\"effectiveRoles\"}}],\"schema\":{\"id\":\"http://jsonschema.net\",\"title\":\"User\",\"viewable\":true,\"$schema\":\"http://json-schema.org/draft-03/schema\",\"order\":[\"userName\",\"givenName\",\"sn\",\"mail\",\"accountStatus\",\"telephoneNumber\",\"postalAddress\",\"address2\",\"city\",\"postalCode\",\"country\",\"stateProvince\",\"roles\",\"manager\"],\"properties\":{\"mail\":{\"title\":\"Email Address\",\"viewable\":true,\"type\":\"string\",\"searchable\":true},\"sn\":{\"title\":\"Last Name\",\"viewable\":true,\"type\":\"string\",\"searchable\":true},\"address2\":{\"type\":\"string\",\"title\":\"Address 2\",\"viewable\":true},\"givenName\":{\"title\":\"First Name\",\"viewable\":true,\"type\":\"string\",\"searchable\":true},\"city\":{\"type\":\"string\",\"title\":\"City\",\"viewable\":true},\"country\":{\"type\":\"string\",\"title\":\"Country\",\"viewable\":true},\"postalCode\":{\"type\":\"string\",\"title\":\"Postal Code\",\"viewable\":true},\"accountStatus\":{\"title\":\"Status\",\"viewable\":true,\"type\":\"string\",\"searchable\":true},\"roles\":{\"description\":\"\",\"title\":\"Roles\",\"viewable\":true,\"type\":\"array\",\"items\":{\"type\":\"string\",\"resourceCollection\":{\"path\":\"managed/role\",\"query\":{\"queryFilter\":\"true\",\"fields\":[\"properties/name\"],\"sortKeys\":[\"properties/name\"]}}}},\"telephoneNumber\":{\"type\":\"string\",\"title\":\"Mobile Phone\",\"viewable\":true},\"stateProvince\":{\"type\":\"string\",\"title\":\"State/Province\",\"viewable\":true},\"postalAddress\":{\"type\":\"string\",\"title\":\"Address 1\",\"viewable\":true},\"userName\":{\"title\":\"Username\",\"viewable\":true,\"type\":\"string\",\"searchable\":true},\"manager\":{\"description\":\"\",\"title\":\"Manager\",\"viewable\":true,\"searchable\":false,\"resourceCollection\":{\"path\":\"managed/user\",\"label\":\"Reports\",\"query\":{\"queryFilter\":\"true\",\"fields\":[\"userName\",\"givenName\",\"sn\"],\"sortKeys\":[\"userName\"]}},\"type\":\"string\"}},\"type\":\"object\",\"required\":[\"userName\",\"givenName\",\"sn\",\"mail\"]}},{\"name\":\"role\",\"postCreate\":{\"type\":\"text/javascript\",\"file\":\"roles/update-users-of-role.js\"},\"postUpdate\":{\"type\":\"text/javascript\",\"file\":\"roles/update-users-of-role.js\"},\"postDelete\":{\"type\":\"text/javascript\",\"file\":\"roles/update-users-of-role.js\"},\"onDelete\":{\"type\":\"text/javascript\",\"file\":\"roles/onDelete-roles.js\"},\"schema\":{\"$schema\":\"http://forgerock.org/json-schema#\",\"type\":\"object\",\"title\":\"Role\",\"description\":\"\",\"properties\":{\"_id\":{\"description\":\"\",\"title\":\"Name\",\"viewable\":false,\"searchable\":false,\"type\":\"string\"},\"properties\":{\"description\":\"\",\"title\":\"Properties\",\"viewable\":true,\"searchable\":false,\"type\":\"object\",\"properties\":{\"name\":{\"description\":\"The role name, used for display purposes.\",\"title\":\"Name\",\"viewable\":true,\"searchable\":true,\"type\":\"string\"},\"description\":{\"description\":\"\",\"title\":\"Description\",\"viewable\":true,\"searchable\":true,\"type\":\"string\"}},\"required\":[\"name\",\"description\"],\"order\":[\"name\",\"description\"]},\"assignments\":{\"description\":\"\",\"title\":\"Assignments\",\"viewable\":true,\"searchable\":false,\"type\":\"string\"}},\"required\":[\"_id\",\"properties\"],\"order\":[\"_id\",\"properties\",\"assignments\"]}}],\"_id\":\"managed\"}"
            ]
        );
        
        server.respondWith(
            "DELETE",   
            "/openidm/managed/role/5a4c43ef-71fc-4dbd-80ae-3236ecde9eef",
            [
                200, 
                {},
                "{\"properties\":{\"name\":\"newRole\",\"description\":\"newRole description\"},\"_id\":\"5a4c43ef-71fc-4dbd-80ae-3236ecde9eef\",\"_rev\":\"2\",\"assignments\":{\"myEntitlement\":{\"attributes\":[{\"name\":\"myAttr\",\"value\":\"myAttrVal\",\"assignmentOperation\":\"mergeWithTarget\",\"unassignmentOperation\":\"removeFromTarget\"}]}}}"
            ]
        );
        
        server.respondWith(
            "POST",   
            "/openidm/managed/role?_action=create",
            [
                201, 
                {},
                "{\"properties\":{\"name\":\"newRole\",\"description\":\"newRole description\"},\"_id\":\"5a4c43ef-71fc-4dbd-80ae-3236ecde9eef\",\"_rev\":\"16\"}"
            ]
        );
    
        server.respondWith(
            "GET",   
            "/openidm/managed/role/5a4c43ef-71fc-4dbd-80ae-3236ecde9eef",
            [
                200, 
                {},
                "{\"properties\":{\"name\":\"newRole\",\"description\":\"newRole description\"},\"_id\":\"5a4c43ef-71fc-4dbd-80ae-3236ecde9eef\",\"_rev\":\"16\"}"
            ]
        );
    
        server.respondWith(
            "GET",   
            "/openidm/managed/role/5a4c43ef-71fc-4dbd-80ae-3236ecde9eef",
            [
                200, 
                {},
                "{\"properties\":{\"name\":\"newRole\",\"description\":\"newRole description\"},\"_id\":\"5a4c43ef-71fc-4dbd-80ae-3236ecde9eef\",\"_rev\":\"16\"}"
            ]
        );
    
        server.respondWith(
            "GET",   
            "/openidm/managed/user?_queryId=query-all-ids",
            [
                200, 
                {},
                "{\"result\":[{\"_id\":\"e5b6a78c-704e-4766-85c3-66ac06826228\",\"_rev\":\"1\"},{\"_id\":\"2d989ac8-c827-4dc3-b4cb-5ccf4ddabea6\",\"_rev\":\"1\"},{\"_id\":\"5e3e8d9f-95ce-42ae-b34f-e21e35087598\",\"_rev\":\"1\"},{\"_id\":\"601fc78d-ec21-4b87-a251-2d71eb4d9c18\",\"_rev\":\"1\"},{\"_id\":\"071bc8b0-7b69-4538-bfdc-44ff3eae664b\",\"_rev\":\"1\"},{\"_id\":\"772262d8-d9da-4094-bfbd-2716cd56d4b8\",\"_rev\":\"1\"},{\"_id\":\"87f4709b-c9a5-4717-a348-61d6bf2dc8be\",\"_rev\":\"1\"},{\"_id\":\"3039a9ce-efce-4727-ae04-8075b1083f38\",\"_rev\":\"1\"},{\"_id\":\"800d3398-6515-4e31-9d38-d62420ea4dd7\",\"_rev\":\"1\"},{\"_id\":\"e2f81f50-312f-4d21-85ca-c6013c813d14\",\"_rev\":\"1\"},{\"_id\":\"ac7ba936-5f1e-49f2-91c9-6d5c2f3ece6c\",\"_rev\":\"1\"},{\"_id\":\"268cc781-a725-4903-8063-f43c306e5d4e\",\"_rev\":\"1\"},{\"_id\":\"c7735786-50e7-4125-9fa1-03361d1ab82b\",\"_rev\":\"1\"},{\"_id\":\"d7a42435-d3ba-47b4-8f9b-1b5ed585c42c\",\"_rev\":\"1\"},{\"_id\":\"d9944fc1-c0bb-4fa7-acd8-bae66668746b\",\"_rev\":\"1\"},{\"_id\":\"ee7f510e-0456-4c6b-b0c2-72125432964b\",\"_rev\":\"1\"},{\"_id\":\"841bb59b-d753-4af8-ba67-9e70b87067a0\",\"_rev\":\"1\"},{\"_id\":\"172f47fb-7dae-4caa-90ce-7e15bc5f5614\",\"_rev\":\"1\"},{\"_id\":\"d8e92028-8abb-40ae-b760-607fcaa026f2\",\"_rev\":\"1\"},{\"_id\":\"c8ec8921-363e-4b4c-bf18-cd9035989c85\",\"_rev\":\"1\"},{\"_id\":\"dc2e09c9-910d-45d5-b55b-8ebb8f631495\",\"_rev\":\"1\"},{\"_id\":\"85f0a540-0deb-4225-ad5a-a14375487dd4\",\"_rev\":\"1\"},{\"_id\":\"d7313737-3173-452f-b064-8123a4b7ec04\",\"_rev\":\"1\"}],\"resultCount\":23,\"pagedResultsCookie\":null,\"remainingPagedResults\":-1}"
            ]
        );
    
        server.respondWith(
            "GET",   
            "/openidm/managed/user?_queryId=query-all-ids",
            [
                200, 
                {},
                "{\"result\":[{\"_id\":\"e5b6a78c-704e-4766-85c3-66ac06826228\",\"_rev\":\"1\"},{\"_id\":\"2d989ac8-c827-4dc3-b4cb-5ccf4ddabea6\",\"_rev\":\"1\"},{\"_id\":\"5e3e8d9f-95ce-42ae-b34f-e21e35087598\",\"_rev\":\"1\"},{\"_id\":\"601fc78d-ec21-4b87-a251-2d71eb4d9c18\",\"_rev\":\"1\"},{\"_id\":\"071bc8b0-7b69-4538-bfdc-44ff3eae664b\",\"_rev\":\"1\"},{\"_id\":\"772262d8-d9da-4094-bfbd-2716cd56d4b8\",\"_rev\":\"1\"},{\"_id\":\"87f4709b-c9a5-4717-a348-61d6bf2dc8be\",\"_rev\":\"1\"},{\"_id\":\"3039a9ce-efce-4727-ae04-8075b1083f38\",\"_rev\":\"1\"},{\"_id\":\"800d3398-6515-4e31-9d38-d62420ea4dd7\",\"_rev\":\"1\"},{\"_id\":\"e2f81f50-312f-4d21-85ca-c6013c813d14\",\"_rev\":\"1\"},{\"_id\":\"ac7ba936-5f1e-49f2-91c9-6d5c2f3ece6c\",\"_rev\":\"1\"},{\"_id\":\"268cc781-a725-4903-8063-f43c306e5d4e\",\"_rev\":\"1\"},{\"_id\":\"c7735786-50e7-4125-9fa1-03361d1ab82b\",\"_rev\":\"1\"},{\"_id\":\"d7a42435-d3ba-47b4-8f9b-1b5ed585c42c\",\"_rev\":\"1\"},{\"_id\":\"d9944fc1-c0bb-4fa7-acd8-bae66668746b\",\"_rev\":\"1\"},{\"_id\":\"ee7f510e-0456-4c6b-b0c2-72125432964b\",\"_rev\":\"1\"},{\"_id\":\"841bb59b-d753-4af8-ba67-9e70b87067a0\",\"_rev\":\"1\"},{\"_id\":\"172f47fb-7dae-4caa-90ce-7e15bc5f5614\",\"_rev\":\"1\"},{\"_id\":\"d8e92028-8abb-40ae-b760-607fcaa026f2\",\"_rev\":\"1\"},{\"_id\":\"c8ec8921-363e-4b4c-bf18-cd9035989c85\",\"_rev\":\"1\"},{\"_id\":\"dc2e09c9-910d-45d5-b55b-8ebb8f631495\",\"_rev\":\"1\"},{\"_id\":\"85f0a540-0deb-4225-ad5a-a14375487dd4\",\"_rev\":\"1\"},{\"_id\":\"d7313737-3173-452f-b064-8123a4b7ec04\",\"_rev\":\"1\"}],\"resultCount\":23,\"pagedResultsCookie\":null,\"remainingPagedResults\":-1}"
            ]
        );
    
        server.respondWith(
            "GET",   
            "/openidm/managed/user?_queryFilter=_id+sw+%22%22&_pageSize=10&_sortKeys=userName&_pagedResultsOffset=0",
            [
                200, 
                {},
                "{\"result\":[{\"_id\":\"85f0a540-0deb-4225-ad5a-a14375487dd4\",\"_rev\":\"1\",\"userName\":\"hradmin\",\"displayName\":\"HR Admin\",\"description\":\"This is the description for HR Admin\",\"givenName\":\"HR\",\"mail\":\"hradmin@maildomain.net\",\"telephoneNumber\":\"+1 685 622 6202\",\"sn\":\"Admin\",\"accountStatus\":\"active\",\"roles\":[\"openidm-authorized\"],\"lastPasswordSet\":\"\",\"postalCode\":\"\",\"stateProvince\":\"\",\"passwordAttempts\":\"0\",\"lastPasswordAttempt\":\"Mon Jun 01 2015 11:05:12 GMT-0700 (PDT)\",\"postalAddress\":\"\",\"address2\":\"\",\"country\":\"\",\"city\":\"\",\"effectiveRoles\":[\"openidm-authorized\"],\"effectiveAssignments\":null},{\"_id\":\"dc2e09c9-910d-45d5-b55b-8ebb8f631495\",\"_rev\":\"1\",\"userName\":\"superadmin\",\"displayName\":\"Super Admin\",\"description\":\"This is the description for Super Admin\",\"givenName\":\"Super\",\"mail\":\"superadmin@maildomain.net\",\"telephoneNumber\":\"+1 685 622 6202\",\"sn\":\"Admin\",\"accountStatus\":\"active\",\"roles\":[\"openidm-authorized\"],\"lastPasswordSet\":\"\",\"postalCode\":\"\",\"stateProvince\":\"\",\"passwordAttempts\":\"0\",\"lastPasswordAttempt\":\"Mon Jun 01 2015 11:05:12 GMT-0700 (PDT)\",\"postalAddress\":\"\",\"address2\":\"\",\"country\":\"\",\"city\":\"\",\"effectiveRoles\":[\"openidm-authorized\"],\"effectiveAssignments\":null},{\"_id\":\"d7313737-3173-452f-b064-8123a4b7ec04\",\"_rev\":\"1\",\"userName\":\"systemadmin\",\"displayName\":\"System\",\"description\":\"This is the description for System Admin.\",\"givenName\":\"System\",\"mail\":\"systemadmin@maildomain.net\",\"telephoneNumber\":\"+1 154 428 0080\",\"sn\":\"Admin\",\"accountStatus\":\"active\",\"roles\":[\"openidm-authorized\"],\"lastPasswordSet\":\"\",\"postalCode\":\"\",\"stateProvince\":\"\",\"passwordAttempts\":\"0\",\"lastPasswordAttempt\":\"Mon Jun 01 2015 11:05:12 GMT-0700 (PDT)\",\"postalAddress\":\"\",\"address2\":\"\",\"country\":\"\",\"city\":\"\",\"effectiveRoles\":[\"openidm-authorized\"],\"effectiveAssignments\":null},{\"_id\":\"5e3e8d9f-95ce-42ae-b34f-e21e35087598\",\"_rev\":\"1\",\"userName\":\"user.0\",\"displayName\":\"Aaccf Amar\",\"description\":\"This is the description for Aaccf Amar.\",\"givenName\":\"Aaccf\",\"mail\":\"user.0@maildomain.net\",\"telephoneNumber\":\"+1 685 622 6202\",\"sn\":\"Amar\",\"accountStatus\":\"active\",\"roles\":[\"openidm-authorized\"],\"lastPasswordSet\":\"\",\"postalCode\":\"\",\"stateProvince\":\"\",\"passwordAttempts\":\"0\",\"lastPasswordAttempt\":\"Mon Jun 01 2015 11:05:10 GMT-0700 (PDT)\",\"postalAddress\":\"\",\"address2\":\"\",\"country\":\"\",\"city\":\"\",\"effectiveRoles\":[\"openidm-authorized\"],\"effectiveAssignments\":null},{\"_id\":\"3039a9ce-efce-4727-ae04-8075b1083f38\",\"_rev\":\"1\",\"userName\":\"user.1\",\"displayName\":\"Aaren Atp\",\"description\":\"This is the description for Aaren Atp.\",\"givenName\":\"Aaren\",\"mail\":\"user.1@maildomain.net\",\"telephoneNumber\":\"+1 390 103 6917\",\"sn\":\"Atp\",\"accountStatus\":\"active\",\"roles\":[\"openidm-authorized\"],\"lastPasswordSet\":\"\",\"postalCode\":\"\",\"stateProvince\":\"\",\"passwordAttempts\":\"0\",\"lastPasswordAttempt\":\"Mon Jun 01 2015 11:05:10 GMT-0700 (PDT)\",\"postalAddress\":\"\",\"address2\":\"\",\"country\":\"\",\"city\":\"\",\"effectiveRoles\":[\"openidm-authorized\"],\"effectiveAssignments\":null},{\"_id\":\"d9944fc1-c0bb-4fa7-acd8-bae66668746b\",\"_rev\":\"1\",\"userName\":\"user.10\",\"displayName\":\"Abbey Abbie\",\"description\":\"This is the description for Abbey Abbie.\",\"givenName\":\"Abbey\",\"mail\":\"user.10@maildomain.net\",\"telephoneNumber\":\"+1 883 194 7070\",\"sn\":\"Abbie\",\"accountStatus\":\"active\",\"roles\":[\"openidm-authorized\"],\"lastPasswordSet\":\"\",\"postalCode\":\"\",\"stateProvince\":\"\",\"passwordAttempts\":\"0\",\"lastPasswordAttempt\":\"Mon Jun 01 2015 11:05:12 GMT-0700 (PDT)\",\"postalAddress\":\"\",\"address2\":\"\",\"country\":\"\",\"city\":\"\",\"effectiveRoles\":[\"openidm-authorized\"],\"effectiveAssignments\":null},{\"_id\":\"d7a42435-d3ba-47b4-8f9b-1b5ed585c42c\",\"_rev\":\"1\",\"userName\":\"user.11\",\"displayName\":\"Abbi Abbott\",\"description\":\"This is the description for Abbi Abbott.\",\"givenName\":\"Abbi\",\"mail\":\"user.11@maildomain.net\",\"telephoneNumber\":\"+1 591 537 3301\",\"sn\":\"Abbott\",\"accountStatus\":\"active\",\"roles\":[\"openidm-authorized\"],\"lastPasswordSet\":\"\",\"postalCode\":\"\",\"stateProvince\":\"\",\"passwordAttempts\":\"0\",\"lastPasswordAttempt\":\"Mon Jun 01 2015 11:05:11 GMT-0700 (PDT)\",\"postalAddress\":\"\",\"address2\":\"\",\"country\":\"\",\"city\":\"\",\"effectiveRoles\":[\"openidm-authorized\"],\"effectiveAssignments\":null},{\"_id\":\"ac7ba936-5f1e-49f2-91c9-6d5c2f3ece6c\",\"_rev\":\"1\",\"userName\":\"user.12\",\"displayName\":\"Abbie Abdalla\",\"description\":\"This is the description for Abbie Abdalla.\",\"givenName\":\"Abbie\",\"mail\":\"user.12@maildomain.net\",\"telephoneNumber\":\"+1 062 873 3050\",\"sn\":\"Abdalla\",\"accountStatus\":\"active\",\"roles\":[\"openidm-authorized\"],\"lastPasswordSet\":\"\",\"postalCode\":\"\",\"stateProvince\":\"\",\"passwordAttempts\":\"0\",\"lastPasswordAttempt\":\"Mon Jun 01 2015 11:05:10 GMT-0700 (PDT)\",\"postalAddress\":\"\",\"address2\":\"\",\"country\":\"\",\"city\":\"\",\"effectiveRoles\":[\"openidm-authorized\"],\"effectiveAssignments\":null},{\"_id\":\"c7735786-50e7-4125-9fa1-03361d1ab82b\",\"_rev\":\"1\",\"userName\":\"user.13\",\"displayName\":\"Abby Abdo\",\"description\":\"This is the description for Abby Abdo.\",\"givenName\":\"Abby\",\"mail\":\"user.13@maildomain.net\",\"telephoneNumber\":\"+1 049 261 0167\",\"sn\":\"Abdo\",\"accountStatus\":\"active\",\"roles\":[\"openidm-authorized\"],\"lastPasswordSet\":\"\",\"postalCode\":\"\",\"stateProvince\":\"\",\"passwordAttempts\":\"0\",\"lastPasswordAttempt\":\"Mon Jun 01 2015 11:05:11 GMT-0700 (PDT)\",\"postalAddress\":\"\",\"address2\":\"\",\"country\":\"\",\"city\":\"\",\"effectiveRoles\":[\"openidm-authorized\"],\"effectiveAssignments\":null},{\"_id\":\"268cc781-a725-4903-8063-f43c306e5d4e\",\"_rev\":\"1\",\"userName\":\"user.14\",\"displayName\":\"Abbye Abdollahi\",\"description\":\"This is the description for Abbye Abdollahi.\",\"givenName\":\"Abbye\",\"mail\":\"user.14@maildomain.net\",\"telephoneNumber\":\"+1 030 505 6190\",\"sn\":\"Abdollahi\",\"accountStatus\":\"active\",\"roles\":[\"openidm-authorized\"],\"lastPasswordSet\":\"\",\"postalCode\":\"\",\"stateProvince\":\"\",\"passwordAttempts\":\"0\",\"lastPasswordAttempt\":\"Mon Jun 01 2015 11:05:11 GMT-0700 (PDT)\",\"postalAddress\":\"\",\"address2\":\"\",\"country\":\"\",\"city\":\"\",\"effectiveRoles\":[\"openidm-authorized\"],\"effectiveAssignments\":null}],\"resultCount\":10,\"pagedResultsCookie\":\"10\",\"remainingPagedResults\":-1}"
            ]
        );
    
        server.respondWith(
            "GET",   
            "/openidm/managed/user?_queryFilter=_id+sw+%22%22&_pageSize=10&_sortKeys=userName&_pagedResultsOffset=0",
            [
                200, 
                {},
                "{\"result\":[{\"_id\":\"85f0a540-0deb-4225-ad5a-a14375487dd4\",\"_rev\":\"1\",\"userName\":\"hradmin\",\"displayName\":\"HR Admin\",\"description\":\"This is the description for HR Admin\",\"givenName\":\"HR\",\"mail\":\"hradmin@maildomain.net\",\"telephoneNumber\":\"+1 685 622 6202\",\"sn\":\"Admin\",\"accountStatus\":\"active\",\"roles\":[\"openidm-authorized\"],\"lastPasswordSet\":\"\",\"postalCode\":\"\",\"stateProvince\":\"\",\"passwordAttempts\":\"0\",\"lastPasswordAttempt\":\"Mon Jun 01 2015 11:05:12 GMT-0700 (PDT)\",\"postalAddress\":\"\",\"address2\":\"\",\"country\":\"\",\"city\":\"\",\"effectiveRoles\":[\"openidm-authorized\"],\"effectiveAssignments\":null},{\"_id\":\"dc2e09c9-910d-45d5-b55b-8ebb8f631495\",\"_rev\":\"1\",\"userName\":\"superadmin\",\"displayName\":\"Super Admin\",\"description\":\"This is the description for Super Admin\",\"givenName\":\"Super\",\"mail\":\"superadmin@maildomain.net\",\"telephoneNumber\":\"+1 685 622 6202\",\"sn\":\"Admin\",\"accountStatus\":\"active\",\"roles\":[\"openidm-authorized\"],\"lastPasswordSet\":\"\",\"postalCode\":\"\",\"stateProvince\":\"\",\"passwordAttempts\":\"0\",\"lastPasswordAttempt\":\"Mon Jun 01 2015 11:05:12 GMT-0700 (PDT)\",\"postalAddress\":\"\",\"address2\":\"\",\"country\":\"\",\"city\":\"\",\"effectiveRoles\":[\"openidm-authorized\"],\"effectiveAssignments\":null},{\"_id\":\"d7313737-3173-452f-b064-8123a4b7ec04\",\"_rev\":\"1\",\"userName\":\"systemadmin\",\"displayName\":\"System\",\"description\":\"This is the description for System Admin.\",\"givenName\":\"System\",\"mail\":\"systemadmin@maildomain.net\",\"telephoneNumber\":\"+1 154 428 0080\",\"sn\":\"Admin\",\"accountStatus\":\"active\",\"roles\":[\"openidm-authorized\"],\"lastPasswordSet\":\"\",\"postalCode\":\"\",\"stateProvince\":\"\",\"passwordAttempts\":\"0\",\"lastPasswordAttempt\":\"Mon Jun 01 2015 11:05:12 GMT-0700 (PDT)\",\"postalAddress\":\"\",\"address2\":\"\",\"country\":\"\",\"city\":\"\",\"effectiveRoles\":[\"openidm-authorized\"],\"effectiveAssignments\":null},{\"_id\":\"5e3e8d9f-95ce-42ae-b34f-e21e35087598\",\"_rev\":\"1\",\"userName\":\"user.0\",\"displayName\":\"Aaccf Amar\",\"description\":\"This is the description for Aaccf Amar.\",\"givenName\":\"Aaccf\",\"mail\":\"user.0@maildomain.net\",\"telephoneNumber\":\"+1 685 622 6202\",\"sn\":\"Amar\",\"accountStatus\":\"active\",\"roles\":[\"openidm-authorized\"],\"lastPasswordSet\":\"\",\"postalCode\":\"\",\"stateProvince\":\"\",\"passwordAttempts\":\"0\",\"lastPasswordAttempt\":\"Mon Jun 01 2015 11:05:10 GMT-0700 (PDT)\",\"postalAddress\":\"\",\"address2\":\"\",\"country\":\"\",\"city\":\"\",\"effectiveRoles\":[\"openidm-authorized\"],\"effectiveAssignments\":null},{\"_id\":\"3039a9ce-efce-4727-ae04-8075b1083f38\",\"_rev\":\"1\",\"userName\":\"user.1\",\"displayName\":\"Aaren Atp\",\"description\":\"This is the description for Aaren Atp.\",\"givenName\":\"Aaren\",\"mail\":\"user.1@maildomain.net\",\"telephoneNumber\":\"+1 390 103 6917\",\"sn\":\"Atp\",\"accountStatus\":\"active\",\"roles\":[\"openidm-authorized\"],\"lastPasswordSet\":\"\",\"postalCode\":\"\",\"stateProvince\":\"\",\"passwordAttempts\":\"0\",\"lastPasswordAttempt\":\"Mon Jun 01 2015 11:05:10 GMT-0700 (PDT)\",\"postalAddress\":\"\",\"address2\":\"\",\"country\":\"\",\"city\":\"\",\"effectiveRoles\":[\"openidm-authorized\"],\"effectiveAssignments\":null},{\"_id\":\"d9944fc1-c0bb-4fa7-acd8-bae66668746b\",\"_rev\":\"1\",\"userName\":\"user.10\",\"displayName\":\"Abbey Abbie\",\"description\":\"This is the description for Abbey Abbie.\",\"givenName\":\"Abbey\",\"mail\":\"user.10@maildomain.net\",\"telephoneNumber\":\"+1 883 194 7070\",\"sn\":\"Abbie\",\"accountStatus\":\"active\",\"roles\":[\"openidm-authorized\"],\"lastPasswordSet\":\"\",\"postalCode\":\"\",\"stateProvince\":\"\",\"passwordAttempts\":\"0\",\"lastPasswordAttempt\":\"Mon Jun 01 2015 11:05:12 GMT-0700 (PDT)\",\"postalAddress\":\"\",\"address2\":\"\",\"country\":\"\",\"city\":\"\",\"effectiveRoles\":[\"openidm-authorized\"],\"effectiveAssignments\":null},{\"_id\":\"d7a42435-d3ba-47b4-8f9b-1b5ed585c42c\",\"_rev\":\"1\",\"userName\":\"user.11\",\"displayName\":\"Abbi Abbott\",\"description\":\"This is the description for Abbi Abbott.\",\"givenName\":\"Abbi\",\"mail\":\"user.11@maildomain.net\",\"telephoneNumber\":\"+1 591 537 3301\",\"sn\":\"Abbott\",\"accountStatus\":\"active\",\"roles\":[\"openidm-authorized\"],\"lastPasswordSet\":\"\",\"postalCode\":\"\",\"stateProvince\":\"\",\"passwordAttempts\":\"0\",\"lastPasswordAttempt\":\"Mon Jun 01 2015 11:05:11 GMT-0700 (PDT)\",\"postalAddress\":\"\",\"address2\":\"\",\"country\":\"\",\"city\":\"\",\"effectiveRoles\":[\"openidm-authorized\"],\"effectiveAssignments\":null},{\"_id\":\"ac7ba936-5f1e-49f2-91c9-6d5c2f3ece6c\",\"_rev\":\"1\",\"userName\":\"user.12\",\"displayName\":\"Abbie Abdalla\",\"description\":\"This is the description for Abbie Abdalla.\",\"givenName\":\"Abbie\",\"mail\":\"user.12@maildomain.net\",\"telephoneNumber\":\"+1 062 873 3050\",\"sn\":\"Abdalla\",\"accountStatus\":\"active\",\"roles\":[\"openidm-authorized\"],\"lastPasswordSet\":\"\",\"postalCode\":\"\",\"stateProvince\":\"\",\"passwordAttempts\":\"0\",\"lastPasswordAttempt\":\"Mon Jun 01 2015 11:05:10 GMT-0700 (PDT)\",\"postalAddress\":\"\",\"address2\":\"\",\"country\":\"\",\"city\":\"\",\"effectiveRoles\":[\"openidm-authorized\"],\"effectiveAssignments\":null},{\"_id\":\"c7735786-50e7-4125-9fa1-03361d1ab82b\",\"_rev\":\"1\",\"userName\":\"user.13\",\"displayName\":\"Abby Abdo\",\"description\":\"This is the description for Abby Abdo.\",\"givenName\":\"Abby\",\"mail\":\"user.13@maildomain.net\",\"telephoneNumber\":\"+1 049 261 0167\",\"sn\":\"Abdo\",\"accountStatus\":\"active\",\"roles\":[\"openidm-authorized\"],\"lastPasswordSet\":\"\",\"postalCode\":\"\",\"stateProvince\":\"\",\"passwordAttempts\":\"0\",\"lastPasswordAttempt\":\"Mon Jun 01 2015 11:05:11 GMT-0700 (PDT)\",\"postalAddress\":\"\",\"address2\":\"\",\"country\":\"\",\"city\":\"\",\"effectiveRoles\":[\"openidm-authorized\"],\"effectiveAssignments\":null},{\"_id\":\"268cc781-a725-4903-8063-f43c306e5d4e\",\"_rev\":\"1\",\"userName\":\"user.14\",\"displayName\":\"Abbye Abdollahi\",\"description\":\"This is the description for Abbye Abdollahi.\",\"givenName\":\"Abbye\",\"mail\":\"user.14@maildomain.net\",\"telephoneNumber\":\"+1 030 505 6190\",\"sn\":\"Abdollahi\",\"accountStatus\":\"active\",\"roles\":[\"openidm-authorized\"],\"lastPasswordSet\":\"\",\"postalCode\":\"\",\"stateProvince\":\"\",\"passwordAttempts\":\"0\",\"lastPasswordAttempt\":\"Mon Jun 01 2015 11:05:11 GMT-0700 (PDT)\",\"postalAddress\":\"\",\"address2\":\"\",\"country\":\"\",\"city\":\"\",\"effectiveRoles\":[\"openidm-authorized\"],\"effectiveAssignments\":null}],\"resultCount\":10,\"pagedResultsCookie\":\"10\",\"remainingPagedResults\":-1}"
            ]
        );
    
        server.respondWith(
            "PUT",   
            "/openidm/managed/role/5a4c43ef-71fc-4dbd-80ae-3236ecde9eef",
            [
                200, 
                {},
                "{\"properties\":{\"name\":\"newRole\",\"description\":\"newRole description\"},\"_id\":\"5a4c43ef-71fc-4dbd-80ae-3236ecde9eef\",\"_rev\":\"17\",\"assignments\":{\"myEntitlement\":{\"attributes\":[{\"name\":\"myAttr\",\"value\":\"myAttrVal\",\"assignmentOperation\":\"mergeWithTarget\",\"unassignmentOperation\":\"removeFromTarget\"}]}}}"
            ]
        );
    
        server.respondWith(
            "PUT",   
            "/openidm/managed/user/5e3e8d9f-95ce-42ae-b34f-e21e35087598",
            [
                200, 
                {},
                "{\"_id\":\"5e3e8d9f-95ce-42ae-b34f-e21e35087598\",\"_rev\":\"2\",\"userName\":\"user.0\",\"displayName\":\"Aaccf Amar\",\"description\":\"This is the description for Aaccf Amar.\",\"givenName\":\"Aaccf\",\"mail\":\"user.0@maildomain.net\",\"telephoneNumber\":\"+1 685 622 6202\",\"sn\":\"Amar\",\"accountStatus\":\"active\",\"roles\":[\"openidm-authorized\",\"managed/role/5a4c43ef-71fc-4dbd-80ae-3236ecde9eef\"],\"lastPasswordSet\":\"\",\"postalCode\":\"\",\"stateProvince\":\"\",\"passwordAttempts\":\"0\",\"lastPasswordAttempt\":\"Mon Jun 01 2015 11:05:10 GMT-0700 (PDT)\",\"postalAddress\":\"\",\"address2\":\"\",\"country\":\"\",\"city\":\"\",\"effectiveRoles\":[\"openidm-authorized\",\"managed/role/5a4c43ef-71fc-4dbd-80ae-3236ecde9eef\"],\"effectiveAssignments\":{\"myEntitlement\":{\"attributes\":[{\"name\":\"myAttr\",\"value\":\"myAttrVal\",\"assignmentOperation\":\"mergeWithTarget\",\"unassignmentOperation\":\"removeFromTarget\",\"assignedThrough\":\"managed/role/5a4c43ef-71fc-4dbd-80ae-3236ecde9eef\"}]}}}"
            ]
        );
    
        server.respondWith(
            "GET",   
            "/openidm/managed/user?_queryId=query-all-ids",
            [
                200, 
                {},
                "{\"result\":[{\"_id\":\"e5b6a78c-704e-4766-85c3-66ac06826228\",\"_rev\":\"1\"},{\"_id\":\"2d989ac8-c827-4dc3-b4cb-5ccf4ddabea6\",\"_rev\":\"1\"},{\"_id\":\"5e3e8d9f-95ce-42ae-b34f-e21e35087598\",\"_rev\":\"2\"},{\"_id\":\"601fc78d-ec21-4b87-a251-2d71eb4d9c18\",\"_rev\":\"1\"},{\"_id\":\"071bc8b0-7b69-4538-bfdc-44ff3eae664b\",\"_rev\":\"1\"},{\"_id\":\"772262d8-d9da-4094-bfbd-2716cd56d4b8\",\"_rev\":\"1\"},{\"_id\":\"87f4709b-c9a5-4717-a348-61d6bf2dc8be\",\"_rev\":\"1\"},{\"_id\":\"3039a9ce-efce-4727-ae04-8075b1083f38\",\"_rev\":\"1\"},{\"_id\":\"800d3398-6515-4e31-9d38-d62420ea4dd7\",\"_rev\":\"1\"},{\"_id\":\"e2f81f50-312f-4d21-85ca-c6013c813d14\",\"_rev\":\"1\"},{\"_id\":\"ac7ba936-5f1e-49f2-91c9-6d5c2f3ece6c\",\"_rev\":\"1\"},{\"_id\":\"268cc781-a725-4903-8063-f43c306e5d4e\",\"_rev\":\"1\"},{\"_id\":\"c7735786-50e7-4125-9fa1-03361d1ab82b\",\"_rev\":\"1\"},{\"_id\":\"d7a42435-d3ba-47b4-8f9b-1b5ed585c42c\",\"_rev\":\"1\"},{\"_id\":\"d9944fc1-c0bb-4fa7-acd8-bae66668746b\",\"_rev\":\"1\"},{\"_id\":\"ee7f510e-0456-4c6b-b0c2-72125432964b\",\"_rev\":\"1\"},{\"_id\":\"841bb59b-d753-4af8-ba67-9e70b87067a0\",\"_rev\":\"1\"},{\"_id\":\"172f47fb-7dae-4caa-90ce-7e15bc5f5614\",\"_rev\":\"1\"},{\"_id\":\"d8e92028-8abb-40ae-b760-607fcaa026f2\",\"_rev\":\"1\"},{\"_id\":\"c8ec8921-363e-4b4c-bf18-cd9035989c85\",\"_rev\":\"1\"},{\"_id\":\"dc2e09c9-910d-45d5-b55b-8ebb8f631495\",\"_rev\":\"1\"},{\"_id\":\"85f0a540-0deb-4225-ad5a-a14375487dd4\",\"_rev\":\"1\"},{\"_id\":\"d7313737-3173-452f-b064-8123a4b7ec04\",\"_rev\":\"1\"}],\"resultCount\":23,\"pagedResultsCookie\":null,\"remainingPagedResults\":-1}"
            ]
        );
    
        server.respondWith(
            "GET",   
            "/openidm/managed/user?_queryFilter=_id+sw+%22%22&_pageSize=10&_sortKeys=userName&_pagedResultsOffset=0",
            [
                200, 
                {},
                "{\"result\":[{\"_id\":\"85f0a540-0deb-4225-ad5a-a14375487dd4\",\"_rev\":\"1\",\"userName\":\"hradmin\",\"displayName\":\"HR Admin\",\"description\":\"This is the description for HR Admin\",\"givenName\":\"HR\",\"mail\":\"hradmin@maildomain.net\",\"telephoneNumber\":\"+1 685 622 6202\",\"sn\":\"Admin\",\"accountStatus\":\"active\",\"roles\":[\"openidm-authorized\"],\"lastPasswordSet\":\"\",\"postalCode\":\"\",\"stateProvince\":\"\",\"passwordAttempts\":\"0\",\"lastPasswordAttempt\":\"Mon Jun 01 2015 11:05:12 GMT-0700 (PDT)\",\"postalAddress\":\"\",\"address2\":\"\",\"country\":\"\",\"city\":\"\",\"effectiveRoles\":[\"openidm-authorized\"],\"effectiveAssignments\":null},{\"_id\":\"dc2e09c9-910d-45d5-b55b-8ebb8f631495\",\"_rev\":\"1\",\"userName\":\"superadmin\",\"displayName\":\"Super Admin\",\"description\":\"This is the description for Super Admin\",\"givenName\":\"Super\",\"mail\":\"superadmin@maildomain.net\",\"telephoneNumber\":\"+1 685 622 6202\",\"sn\":\"Admin\",\"accountStatus\":\"active\",\"roles\":[\"openidm-authorized\"],\"lastPasswordSet\":\"\",\"postalCode\":\"\",\"stateProvince\":\"\",\"passwordAttempts\":\"0\",\"lastPasswordAttempt\":\"Mon Jun 01 2015 11:05:12 GMT-0700 (PDT)\",\"postalAddress\":\"\",\"address2\":\"\",\"country\":\"\",\"city\":\"\",\"effectiveRoles\":[\"openidm-authorized\"],\"effectiveAssignments\":null},{\"_id\":\"d7313737-3173-452f-b064-8123a4b7ec04\",\"_rev\":\"1\",\"userName\":\"systemadmin\",\"displayName\":\"System\",\"description\":\"This is the description for System Admin.\",\"givenName\":\"System\",\"mail\":\"systemadmin@maildomain.net\",\"telephoneNumber\":\"+1 154 428 0080\",\"sn\":\"Admin\",\"accountStatus\":\"active\",\"roles\":[\"openidm-authorized\"],\"lastPasswordSet\":\"\",\"postalCode\":\"\",\"stateProvince\":\"\",\"passwordAttempts\":\"0\",\"lastPasswordAttempt\":\"Mon Jun 01 2015 11:05:12 GMT-0700 (PDT)\",\"postalAddress\":\"\",\"address2\":\"\",\"country\":\"\",\"city\":\"\",\"effectiveRoles\":[\"openidm-authorized\"],\"effectiveAssignments\":null},{\"_id\":\"5e3e8d9f-95ce-42ae-b34f-e21e35087598\",\"_rev\":\"2\",\"userName\":\"user.0\",\"displayName\":\"Aaccf Amar\",\"description\":\"This is the description for Aaccf Amar.\",\"givenName\":\"Aaccf\",\"mail\":\"user.0@maildomain.net\",\"telephoneNumber\":\"+1 685 622 6202\",\"sn\":\"Amar\",\"accountStatus\":\"active\",\"roles\":[\"openidm-authorized\",\"managed/role/5a4c43ef-71fc-4dbd-80ae-3236ecde9eef\"],\"lastPasswordSet\":\"\",\"postalCode\":\"\",\"stateProvince\":\"\",\"passwordAttempts\":\"0\",\"lastPasswordAttempt\":\"Mon Jun 01 2015 11:05:10 GMT-0700 (PDT)\",\"postalAddress\":\"\",\"address2\":\"\",\"country\":\"\",\"city\":\"\",\"effectiveRoles\":[\"openidm-authorized\",\"managed/role/5a4c43ef-71fc-4dbd-80ae-3236ecde9eef\"],\"effectiveAssignments\":{\"myEntitlement\":{\"attributes\":[{\"name\":\"myAttr\",\"value\":\"myAttrVal\",\"assignmentOperation\":\"mergeWithTarget\",\"unassignmentOperation\":\"removeFromTarget\",\"assignedThrough\":\"managed/role/5a4c43ef-71fc-4dbd-80ae-3236ecde9eef\"}]}}},{\"_id\":\"3039a9ce-efce-4727-ae04-8075b1083f38\",\"_rev\":\"1\",\"userName\":\"user.1\",\"displayName\":\"Aaren Atp\",\"description\":\"This is the description for Aaren Atp.\",\"givenName\":\"Aaren\",\"mail\":\"user.1@maildomain.net\",\"telephoneNumber\":\"+1 390 103 6917\",\"sn\":\"Atp\",\"accountStatus\":\"active\",\"roles\":[\"openidm-authorized\"],\"lastPasswordSet\":\"\",\"postalCode\":\"\",\"stateProvince\":\"\",\"passwordAttempts\":\"0\",\"lastPasswordAttempt\":\"Mon Jun 01 2015 11:05:10 GMT-0700 (PDT)\",\"postalAddress\":\"\",\"address2\":\"\",\"country\":\"\",\"city\":\"\",\"effectiveRoles\":[\"openidm-authorized\"],\"effectiveAssignments\":null},{\"_id\":\"d9944fc1-c0bb-4fa7-acd8-bae66668746b\",\"_rev\":\"1\",\"userName\":\"user.10\",\"displayName\":\"Abbey Abbie\",\"description\":\"This is the description for Abbey Abbie.\",\"givenName\":\"Abbey\",\"mail\":\"user.10@maildomain.net\",\"telephoneNumber\":\"+1 883 194 7070\",\"sn\":\"Abbie\",\"accountStatus\":\"active\",\"roles\":[\"openidm-authorized\"],\"lastPasswordSet\":\"\",\"postalCode\":\"\",\"stateProvince\":\"\",\"passwordAttempts\":\"0\",\"lastPasswordAttempt\":\"Mon Jun 01 2015 11:05:12 GMT-0700 (PDT)\",\"postalAddress\":\"\",\"address2\":\"\",\"country\":\"\",\"city\":\"\",\"effectiveRoles\":[\"openidm-authorized\"],\"effectiveAssignments\":null},{\"_id\":\"d7a42435-d3ba-47b4-8f9b-1b5ed585c42c\",\"_rev\":\"1\",\"userName\":\"user.11\",\"displayName\":\"Abbi Abbott\",\"description\":\"This is the description for Abbi Abbott.\",\"givenName\":\"Abbi\",\"mail\":\"user.11@maildomain.net\",\"telephoneNumber\":\"+1 591 537 3301\",\"sn\":\"Abbott\",\"accountStatus\":\"active\",\"roles\":[\"openidm-authorized\"],\"lastPasswordSet\":\"\",\"postalCode\":\"\",\"stateProvince\":\"\",\"passwordAttempts\":\"0\",\"lastPasswordAttempt\":\"Mon Jun 01 2015 11:05:11 GMT-0700 (PDT)\",\"postalAddress\":\"\",\"address2\":\"\",\"country\":\"\",\"city\":\"\",\"effectiveRoles\":[\"openidm-authorized\"],\"effectiveAssignments\":null},{\"_id\":\"ac7ba936-5f1e-49f2-91c9-6d5c2f3ece6c\",\"_rev\":\"1\",\"userName\":\"user.12\",\"displayName\":\"Abbie Abdalla\",\"description\":\"This is the description for Abbie Abdalla.\",\"givenName\":\"Abbie\",\"mail\":\"user.12@maildomain.net\",\"telephoneNumber\":\"+1 062 873 3050\",\"sn\":\"Abdalla\",\"accountStatus\":\"active\",\"roles\":[\"openidm-authorized\"],\"lastPasswordSet\":\"\",\"postalCode\":\"\",\"stateProvince\":\"\",\"passwordAttempts\":\"0\",\"lastPasswordAttempt\":\"Mon Jun 01 2015 11:05:10 GMT-0700 (PDT)\",\"postalAddress\":\"\",\"address2\":\"\",\"country\":\"\",\"city\":\"\",\"effectiveRoles\":[\"openidm-authorized\"],\"effectiveAssignments\":null},{\"_id\":\"c7735786-50e7-4125-9fa1-03361d1ab82b\",\"_rev\":\"1\",\"userName\":\"user.13\",\"displayName\":\"Abby Abdo\",\"description\":\"This is the description for Abby Abdo.\",\"givenName\":\"Abby\",\"mail\":\"user.13@maildomain.net\",\"telephoneNumber\":\"+1 049 261 0167\",\"sn\":\"Abdo\",\"accountStatus\":\"active\",\"roles\":[\"openidm-authorized\"],\"lastPasswordSet\":\"\",\"postalCode\":\"\",\"stateProvince\":\"\",\"passwordAttempts\":\"0\",\"lastPasswordAttempt\":\"Mon Jun 01 2015 11:05:11 GMT-0700 (PDT)\",\"postalAddress\":\"\",\"address2\":\"\",\"country\":\"\",\"city\":\"\",\"effectiveRoles\":[\"openidm-authorized\"],\"effectiveAssignments\":null},{\"_id\":\"268cc781-a725-4903-8063-f43c306e5d4e\",\"_rev\":\"1\",\"userName\":\"user.14\",\"displayName\":\"Abbye Abdollahi\",\"description\":\"This is the description for Abbye Abdollahi.\",\"givenName\":\"Abbye\",\"mail\":\"user.14@maildomain.net\",\"telephoneNumber\":\"+1 030 505 6190\",\"sn\":\"Abdollahi\",\"accountStatus\":\"active\",\"roles\":[\"openidm-authorized\"],\"lastPasswordSet\":\"\",\"postalCode\":\"\",\"stateProvince\":\"\",\"passwordAttempts\":\"0\",\"lastPasswordAttempt\":\"Mon Jun 01 2015 11:05:11 GMT-0700 (PDT)\",\"postalAddress\":\"\",\"address2\":\"\",\"country\":\"\",\"city\":\"\",\"effectiveRoles\":[\"openidm-authorized\"],\"effectiveAssignments\":null}],\"resultCount\":10,\"pagedResultsCookie\":\"10\",\"remainingPagedResults\":-1}"
            ]
        );
        
        server.respondWith(
            "GET",   
            "/openidm/config/sync",
            [
                200, 
                {},
                "{\"mappings\":[{\"name\":\"systemLdapAccounts_managedUser\",\"source\":\"system/ldap/account\",\"target\":\"managed/user\",\"properties\":[{\"source\":\"cn\",\"target\":\"displayName\"},{\"source\":\"description\",\"target\":\"description\"},{\"source\":\"givenName\",\"target\":\"givenName\"},{\"source\":\"mail\",\"target\":\"mail\"},{\"source\":\"telephoneNumber\",\"target\":\"telephoneNumber\"},{\"source\":\"sn\",\"target\":\"sn\"},{\"source\":\"uid\",\"target\":\"userName\"}],\"policies\":[{\"situation\":\"CONFIRMED\",\"action\":\"UPDATE\"},{\"situation\":\"FOUND\",\"action\":\"UPDATE\"},{\"situation\":\"ABSENT\",\"action\":\"CREATE\"},{\"situation\":\"AMBIGUOUS\",\"action\":\"EXCEPTION\"},{\"situation\":\"MISSING\",\"action\":\"CREATE\"},{\"situation\":\"SOURCE_MISSING\",\"action\":\"DELETE\"},{\"situation\":\"UNQUALIFIED\",\"action\":\"IGNORE\"},{\"situation\":\"UNASSIGNED\",\"action\":\"IGNORE\"}]},{\"name\":\"managedUser_systemLdapAccounts\",\"source\":\"managed/user\",\"target\":\"system/ldap/account\",\"links\":\"systemLdapAccounts_managedUser\",\"onCreate\":{\"type\":\"text/javascript\",\"source\":\"target.dn = 'uid=' + source.userName + ',ou=People,dc=example,dc=com';\"},\"properties\":[{\"source\":\"givenName\",\"target\":\"givenName\"},{\"source\":\"sn\",\"target\":\"sn\"},{\"source\":\"\",\"transform\":{\"type\":\"text/javascript\",\"source\":\"source.displayName || (source.givenName + ' ' + source.sn);\"},\"target\":\"cn\"},{\"source\":\"userName\",\"target\":\"uid\"},{\"source\":\"description\",\"target\":\"description\",\"condition\":{\"type\":\"text/javascript\",\"source\":\"!!object.description\"}},{\"source\":\"mail\",\"target\":\"mail\"},{\"source\":\"password\",\"condition\":{\"type\":\"text/javascript\",\"source\":\"object.password != null\"},\"transform\":{\"type\":\"text/javascript\",\"source\":\"openidm.decrypt(source);\"},\"target\":\"userPassword\"},{\"source\":\"telephoneNumber\",\"target\":\"telephoneNumber\",\"condition\":{\"type\":\"text/javascript\",\"source\":\"!!object.telephoneNumber\"}}],\"policies\":[{\"situation\":\"CONFIRMED\",\"action\":\"UPDATE\"},{\"situation\":\"FOUND\",\"action\":\"LINK\"},{\"situation\":\"ABSENT\",\"action\":\"CREATE\"},{\"situation\":\"AMBIGUOUS\",\"action\":\"IGNORE\"},{\"situation\":\"MISSING\",\"action\":\"IGNORE\"},{\"situation\":\"SOURCE_MISSING\",\"action\":\"DELETE\"},{\"situation\":\"UNQUALIFIED\",\"action\":\"IGNORE\"},{\"situation\":\"UNASSIGNED\",\"action\":\"IGNORE\"}]}],\"_id\":\"sync\"}"
            ]
        );

    };

});

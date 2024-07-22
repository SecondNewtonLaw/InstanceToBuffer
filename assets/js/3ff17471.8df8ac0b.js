"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[821],{46494:e=>{e.exports=JSON.parse('{"functions":[{"name":"uint32WithName","desc":"Inserts an action to the deserializer action list, which indicates it to read 4 bytes and treat the return as an unsigned 32 bit integer.\\n\\n\\t","params":[{"name":"valueName","desc":"The index that this uint32 will have when it is deserialized into a table.","lua_type":"string"}],"returns":[{"desc":"The builder instance.","lua_type":"SerializerBuilder"}],"function_type":"static","source":{"line":45,"path":"lib/SerializerBuilder.luau"}},{"name":"uint16WithName","desc":"Inserts an action to the deserializer action list, which indicates it to read 2 bytes and treat the return as an unsigned 16 bit integer.\\n\\n\\t","params":[{"name":"valueName","desc":"The index that this uint16 will have when it is deserialized into a table.","lua_type":"string"}],"returns":[{"desc":"The builder instance.","lua_type":"SerializerBuilder"}],"function_type":"static","source":{"line":63,"path":"lib/SerializerBuilder.luau"}},{"name":"uint8WithName","desc":"Inserts an action to the deserializer action list, which indicates it to read 1 byte and treat the return as an unsigned 8 bit integer.\\n\\n\\t","params":[{"name":"valueName","desc":"The index that this uint8 will have when it is deserialized into a table.","lua_type":"string"}],"returns":[{"desc":"The builder instance.","lua_type":"SerializerBuilder"}],"function_type":"static","source":{"line":81,"path":"lib/SerializerBuilder.luau"}},{"name":"int32WithName","desc":"Inserts an action to the deserializer action list, which indicates it to read 4 bytes and treat the return as an signed 32 bit integer.\\n\\n\\t","params":[{"name":"valueName","desc":"The index that this int32 will have when it is deserialized into a table.","lua_type":"string"}],"returns":[{"desc":"The builder instance.","lua_type":"SerializerBuilder"}],"function_type":"static","source":{"line":99,"path":"lib/SerializerBuilder.luau"}},{"name":"int16WithName","desc":"Inserts an action to the deserializer action list, which indicates it to read 2 bytes and treat the return as an signed 16 bit integer.\\n\\n\\t","params":[{"name":"valueName","desc":"The index that this int16 will have when it is deserialized into a table.","lua_type":"string"}],"returns":[{"desc":"The builder instance.","lua_type":"SerializerBuilder"}],"function_type":"static","source":{"line":117,"path":"lib/SerializerBuilder.luau"}},{"name":"int8WithName","desc":"Inserts an action to the deserializer action list, which indicates it to read 1 byte and treat the return as an signed 8 bit integer.\\n\\n\\t","params":[{"name":"valueName","desc":"The index that this int8 will have when it is deserialized into a table.","lua_type":"string"}],"returns":[{"desc":"The builder instance.","lua_type":"SerializerBuilder"}],"function_type":"static","source":{"line":135,"path":"lib/SerializerBuilder.luau"}},{"name":"floatWithName","desc":"Inserts an action to the deserializer action list, which indicates it to read 4 bytes and to treat the return as a IEEE-754 single-precision floating point number.\\n\\n\\t","params":[{"name":"valueName","desc":"The index that this float32 will have when it is deserialized into a table.","lua_type":"string"}],"returns":[{"desc":"The builder instance.","lua_type":"SerializerBuilder"}],"function_type":"static","source":{"line":153,"path":"lib/SerializerBuilder.luau"}},{"name":"doubleWithName","desc":"Inserts an action to the deserializer action list, which indicates it to read 8 bytes and to treat the return as a IEEE-754 double-precision floating point number.\\n\\n\\t","params":[{"name":"valueName","desc":"The index that this double/float64 will have when it is deserialized into a table.","lua_type":"string"}],"returns":[{"desc":"The builder instance.","lua_type":"SerializerBuilder"}],"function_type":"static","source":{"line":171,"path":"lib/SerializerBuilder.luau"}},{"name":"stringWithName","desc":"Inserts an action to the deserializer action list, which indicates it to read an arbitrary amount bytes and to treat the return as a string. The size of the string is placed four bytes before the string as an int32.\\n\\n\\n\\t","params":[{"name":"valueName","desc":"The index that this string will have when it is deserialized into a table.","lua_type":"string"},{"name":"maxStringSize","desc":"The length of the string, used to cap buffers from becoming too big.","lua_type":"number"}],"returns":[{"desc":"The builder instance.","lua_type":"SerializerBuilder"}],"function_type":"static","errors":[{"lua_type":"\\"maxStringSize must be a number\\"","desc":"Happens when maxStringSize is not of type number."},{"lua_type":"\\"maxStringSize is too big, serializer will not continue\\"","desc":"Happens when maxSizeString exceeds 1025."}],"source":{"line":193,"path":"lib/SerializerBuilder.luau"}},{"name":"booleanWithName","desc":"Inserts an action to the deserializer action list, which indicates it to read 1 byte and to treat the return as a boolean.\\n\\n\\t","params":[{"name":"valueName","desc":"The index that this boolean will have when it is deserialized into a table.","lua_type":"string"}],"returns":[{"desc":"The builder instance.","lua_type":"SerializerBuilder"}],"function_type":"static","source":{"line":214,"path":"lib/SerializerBuilder.luau"}},{"name":"vectorWithName","desc":"Inserts an action to the deserializer action list, which will indicate it to read three IEEE-754 double-precision floating point numbers, representing X, Y and Z for a Vector3.\\n\\n\\t","params":[{"name":"valueName","desc":"The index that this vector will have when it is deserialized into a table.","lua_type":"string"}],"returns":[{"desc":"The builder instance.","lua_type":"SerializerBuilder"}],"function_type":"static","source":{"line":232,"path":"lib/SerializerBuilder.luau"}},{"name":"tableWithName","desc":"Inserts an action to the deserializer action list, which will indicate it to read an aribitrary amount of bytes determined by the table serializer, and to then feed that into the given serializer to craft the table.\\n\\n\\t","params":[{"name":"valueName","desc":"The index that this table will have when it is deserialized into a table.","lua_type":"string"},{"name":"tableSerializer","desc":"The serializer that the table will use when being turned from a buffer into a table and vice-versa.","lua_type":"Serializer<U>"}],"returns":[{"desc":"The builder instance.","lua_type":"SerializerBuilder"}],"function_type":"static","source":{"line":251,"path":"lib/SerializerBuilder.luau"}},{"name":"bufferWithName","desc":"Inserts an action to the deserializer action list, which will read the given number of bytes, then it will copy those bytes into a new buffer.\\n\\n\\t","params":[{"name":"valueName","desc":"The index that this buffer will have when it is deserialized into a table.","lua_type":"string"},{"name":"bufSize","desc":"The size the buffer will have. If not specified, the size will be of 0x1000, or 4096 bytes.","lua_type":"number?"}],"returns":[{"desc":"The builder instance.","lua_type":"SerializerBuilder"}],"function_type":"static","source":{"line":271,"path":"lib/SerializerBuilder.luau"}}],"properties":[],"types":[],"name":"SerializerBuilder","desc":"A builder used to make a simple an intuitive serializer at runtime.\\n\\t","source":{"line":34,"path":"lib/SerializerBuilder.luau"}}')}}]);
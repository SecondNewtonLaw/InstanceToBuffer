"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[947],{53432:e=>{e.exports=JSON.parse('{"functions":[{"name":"Deserialize","desc":"Deserializes the given buffer into a table.\\n\\n\\t\\t","params":[{"name":"buf","desc":"","lua_type":"buffer"}],"returns":[{"desc":"The deserialized result","lua_type":"T"}],"function_type":"static","errors":[{"lua_type":"\\"Buffer cannot be deserialized: Wrong size\\"","desc":"The given buffer is not the size that the Serializer predicts it to be."}],"source":{"line":302,"path":"lib/SerializerBuilder.luau"}},{"name":"GetBufferSize","desc":"Obtains the max size of the buffer in bytes.\\n\\n\\t\\t","params":[],"returns":[{"desc":"The max size, in bytes, of the buffer when it is serialized.","lua_type":"number"}],"function_type":"static","ignore":true,"source":{"line":329,"path":"lib/SerializerBuilder.luau"}},{"name":"Serialize","desc":"Serializes the table into a buffer\\n\\n\\n\\t\\t","params":[{"name":"obj","desc":"The table to convert into a buffer","lua_type":"T"}],"returns":[{"desc":"Array of type Action describing how to serialize the table into a buffer","lua_type":"{ Action }"}],"function_type":"static","errors":[{"lua_type":"\\"Attempted to write a value of type \'X\' when the serializer action that serializes parameter \'index_of_table_being_serialized\' expects a type that fits the description of a Z\\"","desc":"Happens when the serializer attempts to write the wrong type using the wrong write operation. Caused by malformed tables"}],"source":{"line":342,"path":"lib/SerializerBuilder.luau"}},{"name":"GetActionList","desc":" \\nReturns the list of actions the Serializer will do to convert the given table into a buffer.\\n\\n\\t\\t","params":[],"returns":[{"desc":"Array of type Action describing how to serialize the table into a buffer","lua_type":"{ Action }"}],"function_type":"static","ignore":true,"source":{"line":442,"path":"lib/SerializerBuilder.luau"}}],"properties":[],"types":[],"name":"Serializer","desc":"A serializer used to serialize Tables into Buffers\\n\\t\\t","source":{"line":293,"path":"lib/SerializerBuilder.luau"}}')}}]);
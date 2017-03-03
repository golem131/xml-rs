var searchIndex = {};
searchIndex["bitflags"] = {"doc":"A typesafe bitmask flag generator.","items":[[14,"bitflags","bitflags","The `bitflags!` macro generates a `struct` that holds a set of C-style bitmask flags. It is useful for creating typesafe wrappers for C APIs.",null,null]],"paths":[]};
searchIndex["xml"] = {"doc":"This crate currently provides an almost XML 1.0/1.1-compliant pull parser.","items":[[3,"ParserConfig","xml","Parser configuration structure.",null,null],[12,"trim_whitespace","","Whether or not should whitespace in textual events be removed. Default is false.",0,null],[12,"whitespace_to_characters","","Whether or not should whitespace be converted to characters. Default is false.",0,null],[12,"cdata_to_characters","","Whether or not should CDATA be converted to characters. Default is false.",0,null],[12,"ignore_comments","","Whether or not should comments be omitted. Default is true.",0,null],[12,"coalesce_characters","","Whether or not should sequential `Characters` events be merged. Default is true.",0,null],[12,"extra_entities","","A map of extra entities recognized by the parser. Default is an empty map.",0,null],[3,"EmitterConfig","","Emitter configuration structure.",null,null],[12,"line_separator","","Line separator used to separate lines in formatted output. Default is `\"\\n\"`.",1,null],[12,"indent_string","","A string which will be used for a single level of indentation. Default is `\"  \"` (two spaces).",1,null],[12,"perform_indent","","Whether or not the emitted document should be indented. Default is false.",1,null],[12,"perform_escaping","","Whether or not characters in output events will be escaped. Default is true.",1,null],[12,"write_document_declaration","","Whether or not to write XML document declaration at the beginning of a document. Default is true.",1,null],[12,"normalize_empty_elements","","Whether or not to convert elements with empty content to empty elements. Default is true.",1,null],[12,"cdata_to_characters","","Whether or not to emit CDATA events as plain characters. Default is false.",1,null],[12,"keep_element_names_stack","","Whether or not to keep element names to support `EndElement` events without explicit names. Default is true.",1,null],[12,"autopad_comments","","Whether or not to automatically insert leading and trailing spaces in emitted comments, if necessary. Default is true.",1,null],[0,"macros","","Contains several macros used in this crate.",null,null],[0,"name","","Contains XML qualified names manipulation types and functions.",null,null],[3,"Name","xml::name","Represents a qualified XML name.",null,null],[12,"local_name","","A local name, e.g. `string` in `xsi:string`.",2,null],[12,"namespace","","A namespace URI, e.g. `http://www.w3.org/2000/xmlns/`.",2,null],[12,"prefix","","A name prefix, e.g. `xsi` in `xsi:string`.",2,null],[3,"ReprDisplay","","A wrapper around `Name` whose `Display` implementation prints the wrapped name as it is displayed in an XML document.",null,null],[3,"OwnedName","","An owned variant of `Name`.",null,null],[12,"local_name","","A local name, e.g. `string` in `xsi:string`.",3,null],[12,"namespace","","A namespace URI, e.g. `http://www.w3.org/2000/xmlns/`.",3,null],[12,"prefix","","A name prefix, e.g. `xsi` in `xsi:string`.",3,null],[11,"clone","","",2,{"inputs":[{"name":"self"}],"output":{"name":"name"}}],[11,"eq","","",2,{"inputs":[{"name":"self"},{"name":"name"}],"output":{"name":"bool"}}],[11,"ne","","",2,{"inputs":[{"name":"self"},{"name":"name"}],"output":{"name":"bool"}}],[11,"hash","","",2,null],[11,"fmt","","",2,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"from","","",2,{"inputs":[{"name":"str"}],"output":{"name":"name"}}],[11,"from","","",2,null],[11,"fmt","","",2,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"to_owned","","Returns an owned variant of the qualified name.",2,{"inputs":[{"name":"self"}],"output":{"name":"ownedname"}}],[11,"local","","Returns a new `Name` instance representing plain local name.",2,{"inputs":[{"name":"str"}],"output":{"name":"name"}}],[11,"prefixed","","Returns a new `Name` instance with the given local name and prefix.",2,{"inputs":[{"name":"str"},{"name":"str"}],"output":{"name":"name"}}],[11,"qualified","","Returns a new `Name` instance representing a qualified name with or without a prefix and with a namespace URI.",2,{"inputs":[{"name":"str"},{"name":"str"},{"name":"option"}],"output":{"name":"name"}}],[11,"to_repr","","Returns a correct XML representation of this local name and prefix.",2,{"inputs":[{"name":"self"}],"output":{"name":"string"}}],[11,"repr_display","","Returns a structure which can be displayed with `std::fmt` machinery to obtain this local name and prefix.",2,{"inputs":[{"name":"self"}],"output":{"name":"reprdisplay"}}],[11,"prefix_repr","","Returns either a prefix of this name or `namespace::NS_NO_PREFIX` constant.",2,{"inputs":[{"name":"self"}],"output":{"name":"str"}}],[11,"fmt","","",4,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",3,{"inputs":[{"name":"self"}],"output":{"name":"ownedname"}}],[11,"eq","","",3,{"inputs":[{"name":"self"},{"name":"ownedname"}],"output":{"name":"bool"}}],[11,"ne","","",3,{"inputs":[{"name":"self"},{"name":"ownedname"}],"output":{"name":"bool"}}],[11,"hash","","",3,null],[11,"fmt","","",3,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",3,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"borrow","","Constructs a borrowed `Name` based on this owned name.",3,{"inputs":[{"name":"self"}],"output":{"name":"name"}}],[11,"local","","Returns a new `OwnedName` instance representing a plain local name.",3,{"inputs":[{"name":"s"}],"output":{"name":"ownedname"}}],[11,"qualified","","Returns a new `OwnedName` instance representing a qualified name with or without a prefix and with a namespace URI.",3,{"inputs":[{"name":"s1"},{"name":"s2"},{"name":"option"}],"output":{"name":"ownedname"}}],[11,"prefix_ref","","Returns an optional prefix by reference, equivalent to `self.borrow().prefix` but avoids extra work.",3,{"inputs":[{"name":"self"}],"output":{"name":"option"}}],[11,"namespace_ref","","Returns an optional namespace by reference, equivalen to `self.borrow().namespace` but avoids extra work.",3,{"inputs":[{"name":"self"}],"output":{"name":"option"}}],[11,"from","","",3,{"inputs":[{"name":"name"}],"output":{"name":"ownedname"}}],[11,"from_str","","Parses the given string slice into a qualified name.",3,{"inputs":[{"name":"str"}],"output":{"name":"result"}}],[0,"attribute","xml","Contains XML attributes manipulation types and functions.",null,null],[3,"Attribute","xml::attribute","A borrowed version of an XML attribute.",null,null],[12,"name","","Attribute name.",5,null],[12,"value","","Attribute value.",5,null],[3,"OwnedAttribute","","An owned version of an XML attribute.",null,null],[12,"name","","Attribute name.",6,null],[12,"value","","Attribute value.",6,null],[11,"clone","","",5,{"inputs":[{"name":"self"}],"output":{"name":"attribute"}}],[11,"eq","","",5,{"inputs":[{"name":"self"},{"name":"attribute"}],"output":{"name":"bool"}}],[11,"ne","","",5,{"inputs":[{"name":"self"},{"name":"attribute"}],"output":{"name":"bool"}}],[11,"hash","","",5,null],[11,"fmt","","",5,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",5,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"to_owned","","Creates an owned attribute out of this borrowed one.",5,{"inputs":[{"name":"self"}],"output":{"name":"ownedattribute"}}],[11,"new","","Creates a borrowed attribute using the provided borrowed name and a borrowed string value.",5,{"inputs":[{"name":"name"},{"name":"str"}],"output":{"name":"attribute"}}],[11,"clone","","",6,{"inputs":[{"name":"self"}],"output":{"name":"ownedattribute"}}],[11,"eq","","",6,{"inputs":[{"name":"self"},{"name":"ownedattribute"}],"output":{"name":"bool"}}],[11,"ne","","",6,{"inputs":[{"name":"self"},{"name":"ownedattribute"}],"output":{"name":"bool"}}],[11,"hash","","",6,null],[11,"fmt","","",6,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"borrow","","Returns a borrowed `Attribute` out of this owned one.",6,{"inputs":[{"name":"self"}],"output":{"name":"attribute"}}],[11,"new","","Creates a new owned attribute using the provided owned name and an owned string value.",6,{"inputs":[{"name":"ownedname"},{"name":"s"}],"output":{"name":"ownedattribute"}}],[11,"fmt","","",6,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[0,"common","xml","Contains common types and functions used throughout the library.",null,null],[3,"TextPosition","xml::common","Represents a position inside some textual document.",null,null],[12,"row","","Row, counting from 0",7,null],[12,"column","","Column, counting from 0",7,null],[4,"XmlVersion","","XML version enumeration.",null,null],[13,"Version10","","XML version 1.0.",8,null],[13,"Version11","","XML version 1.1.",8,null],[5,"is_whitespace_char","","Checks whether the given character is a white space character (`S`) as is defined by XML 1.1 specification, [section 2.3][1].",null,{"inputs":[{"name":"char"}],"output":{"name":"bool"}}],[5,"is_name_start_char","","Checks whether the given character is a name start character (`NameStartChar`) as is defined by XML 1.1 specification, [section 2.3][1].",null,{"inputs":[{"name":"char"}],"output":{"name":"bool"}}],[5,"is_name_char","","Checks whether the given character is a name character (`NameChar`) as is defined by XML 1.1 specification, [section 2.3][1].",null,{"inputs":[{"name":"char"}],"output":{"name":"bool"}}],[8,"Position","","Get the position in the document corresponding to the object",null,null],[10,"position","","Returns the current position or a position corresponding to the object.",9,{"inputs":[{"name":"self"}],"output":{"name":"textposition"}}],[11,"clone","","",7,{"inputs":[{"name":"self"}],"output":{"name":"textposition"}}],[11,"eq","","",7,{"inputs":[{"name":"self"},{"name":"textposition"}],"output":{"name":"bool"}}],[11,"ne","","",7,{"inputs":[{"name":"self"},{"name":"textposition"}],"output":{"name":"bool"}}],[11,"new","","Creates a new position initialized to the beginning of the document",7,{"inputs":[],"output":{"name":"textposition"}}],[11,"advance","","Advances the position in a line",7,{"inputs":[{"name":"self"},{"name":"u8"}],"output":null}],[11,"advance_to_tab","","Advances the position in a line to the next tab position",7,{"inputs":[{"name":"self"},{"name":"u8"}],"output":null}],[11,"new_line","","Advances the position to the beginning of the next line",7,{"inputs":[{"name":"self"}],"output":null}],[11,"fmt","","",7,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",7,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"position","","",7,{"inputs":[{"name":"self"}],"output":{"name":"textposition"}}],[11,"clone","","",8,{"inputs":[{"name":"self"}],"output":{"name":"xmlversion"}}],[11,"eq","","",8,{"inputs":[{"name":"self"},{"name":"xmlversion"}],"output":{"name":"bool"}}],[11,"fmt","","",8,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",8,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[0,"escape","xml","Contains functions for performing XML special characters escaping.",null,null],[5,"escape_str_attribute","xml::escape","Performs escaping of common XML characters inside an attribute value.",null,{"inputs":[{"name":"str"}],"output":{"name":"cow"}}],[5,"escape_str_pcdata","","Performs escaping of common XML characters inside PCDATA.",null,{"inputs":[{"name":"str"}],"output":{"name":"cow"}}],[0,"namespace","xml","Contains namespace manipulation types and functions.",null,null],[3,"Namespace","xml::namespace","Namespace is a map from prefixes to namespace URIs.",null,null],[12,"0","","",10,null],[3,"NamespaceStack","","Namespace stack is a sequence of namespaces.",null,null],[12,"0","","",11,null],[3,"NamespaceStackMappings","","An iterator over mappings from prefixes to URIs in a namespace stack.",null,null],[3,"CheckedTarget","","A wrapper around `NamespaceStack` which implements `Extend` using `put_checked()`.",null,null],[6,"NamespaceMappings","","An alias for iterator type for namespace mappings contained in a namespace.",null,null],[6,"UriMapping","","A type alias for a pair of `(prefix, uri)` values returned by namespace iterators.",null,null],[17,"NS_XMLNS_PREFIX","","Designates prefix for namespace definitions.",null,null],[17,"NS_XMLNS_URI","","Designates the standard URI for `xmlns` prefix.",null,null],[17,"NS_XML_PREFIX","","Designates prefix for a namespace containing several special predefined attributes.",null,null],[17,"NS_XML_URI","","Designates the standard URI for `xml` prefix.",null,null],[17,"NS_NO_PREFIX","","Designates the absence of prefix in a qualified name.",null,null],[17,"NS_EMPTY_URI","","Designates an empty namespace URI, which is equivalent to absence of namespace.",null,null],[11,"eq","","",10,{"inputs":[{"name":"self"},{"name":"namespace"}],"output":{"name":"bool"}}],[11,"ne","","",10,{"inputs":[{"name":"self"},{"name":"namespace"}],"output":{"name":"bool"}}],[11,"clone","","",10,{"inputs":[{"name":"self"}],"output":{"name":"namespace"}}],[11,"fmt","","",10,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"empty","","Returns an empty namespace.",10,{"inputs":[],"output":{"name":"namespace"}}],[11,"is_empty","","Checks whether this namespace is empty.",10,{"inputs":[{"name":"self"}],"output":{"name":"bool"}}],[11,"is_essentially_empty","","Checks whether this namespace is essentially empty, that is, it does not contain anything but default mappings.",10,{"inputs":[{"name":"self"}],"output":{"name":"bool"}}],[11,"contains","","Checks whether this namespace mapping contains the given prefix.",10,{"inputs":[{"name":"self"},{"name":"p"}],"output":{"name":"bool"}}],[11,"put","","Puts a mapping into this namespace.",10,{"inputs":[{"name":"self"},{"name":"p"},{"name":"u"}],"output":{"name":"bool"}}],[11,"force_put","","Puts a mapping into this namespace forcefully.",10,{"inputs":[{"name":"self"},{"name":"p"},{"name":"u"}],"output":{"name":"option"}}],[11,"get","","Queries the namespace for the given prefix.",10,{"inputs":[{"name":"self"},{"name":"p"}],"output":{"name":"option"}}],[11,"clone","","",11,{"inputs":[{"name":"self"}],"output":{"name":"namespacestack"}}],[11,"eq","","",11,{"inputs":[{"name":"self"},{"name":"namespacestack"}],"output":{"name":"bool"}}],[11,"ne","","",11,{"inputs":[{"name":"self"},{"name":"namespacestack"}],"output":{"name":"bool"}}],[11,"fmt","","",11,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"empty","","Returns an empty namespace stack.",11,{"inputs":[],"output":{"name":"namespacestack"}}],[11,"default","","Returns a namespace stack with default items in it.",11,{"inputs":[],"output":{"name":"namespacestack"}}],[11,"push_empty","","Adds an empty namespace to the top of this stack.",11,{"inputs":[{"name":"self"}],"output":{"name":"namespacestack"}}],[11,"pop","","Removes the topmost namespace in this stack.",11,{"inputs":[{"name":"self"}],"output":{"name":"namespace"}}],[11,"try_pop","","Removes the topmost namespace in this stack.",11,{"inputs":[{"name":"self"}],"output":{"name":"option"}}],[11,"peek_mut","","Borrows the topmost namespace mutably, leaving the stack intact.",11,{"inputs":[{"name":"self"}],"output":{"name":"namespace"}}],[11,"peek","","Borrows the topmost namespace immutably, leaving the stack intact.",11,{"inputs":[{"name":"self"}],"output":{"name":"namespace"}}],[11,"put_checked","","Puts a mapping into the topmost namespace if this stack does not already contain one.",11,{"inputs":[{"name":"self"},{"name":"p"},{"name":"u"}],"output":{"name":"bool"}}],[11,"put","","Puts a mapping into the topmost namespace in this stack.",11,{"inputs":[{"name":"self"},{"name":"p"},{"name":"u"}],"output":{"name":"bool"}}],[11,"get","","Performs a search for the given prefix in the whole stack.",11,{"inputs":[{"name":"self"},{"name":"p"}],"output":{"name":"option"}}],[11,"squash","","Combines this stack of namespaces into a single namespace.",11,{"inputs":[{"name":"self"}],"output":{"name":"namespace"}}],[11,"checked_target","","Returns an object which implements `Extend` using `put_checked()` instead of `put()`.",11,{"inputs":[{"name":"self"}],"output":{"name":"checkedtarget"}}],[11,"iter","","Returns an iterator over all mappings in this namespace stack.",11,{"inputs":[{"name":"self"}],"output":{"name":"namespacestackmappings"}}],[11,"next","","",12,{"inputs":[{"name":"self"}],"output":{"name":"option"}}],[11,"extend","","",10,{"inputs":[{"name":"self"},{"name":"t"}],"output":null}],[11,"extend","","",11,{"inputs":[{"name":"self"},{"name":"t"}],"output":null}],[11,"extend","","",13,{"inputs":[{"name":"self"},{"name":"t"}],"output":null}],[0,"reader","xml","Contains high-level interface for a pull-based XML parser.",null,null],[3,"ParserConfig","xml::reader","Parser configuration structure.",null,null],[12,"trim_whitespace","","Whether or not should whitespace in textual events be removed. Default is false.",0,null],[12,"whitespace_to_characters","","Whether or not should whitespace be converted to characters. Default is false.",0,null],[12,"cdata_to_characters","","Whether or not should CDATA be converted to characters. Default is false.",0,null],[12,"ignore_comments","","Whether or not should comments be omitted. Default is true.",0,null],[12,"coalesce_characters","","Whether or not should sequential `Characters` events be merged. Default is true.",0,null],[12,"extra_entities","","A map of extra entities recognized by the parser. Default is an empty map.",0,null],[3,"Error","","An XML parsing error.",null,null],[3,"EventReader","","A wrapper around an `std::io::Read` instance which provides pull-based XML parsing.",null,null],[3,"Events","","An iterator over XML events created from some type implementing `Read`.",null,null],[4,"XmlEvent","","An element of an XML input stream.",null,null],[13,"StartDocument","","Corresponds to XML document declaration.",14,null],[12,"version","xml::reader::XmlEvent","XML version.",14,null],[12,"encoding","","XML document encoding.",14,null],[12,"standalone","","XML standalone declaration.",14,null],[13,"EndDocument","xml::reader","Denotes to the end of the document stream.",14,null],[13,"ProcessingInstruction","","Denotes an XML processing instruction.",14,null],[12,"name","xml::reader::XmlEvent","Processing instruction target.",14,null],[12,"data","","Processing instruction content.",14,null],[13,"StartElement","xml::reader","Denotes a beginning of an XML element.",14,null],[12,"name","xml::reader::XmlEvent","Qualified name of the element.",14,null],[12,"attributes","","A list of attributes associated with the element.",14,null],[12,"namespace","","Contents of the namespace mapping at this point of the document.",14,null],[13,"EndElement","xml::reader","Denotes an end of an XML element.",14,null],[12,"name","xml::reader::XmlEvent","Qualified name of the element.",14,null],[13,"CData","xml::reader","Denotes CDATA content.",14,null],[13,"Comment","","Denotes a comment.",14,null],[13,"Characters","","Denotes character data outside of tags.",14,null],[13,"Whitespace","","Denotes a chunk of whitespace outside of tags.",14,null],[4,"ErrorKind","","",null,null],[13,"Syntax","","",15,null],[13,"Io","","",15,null],[13,"Utf8","","",15,null],[13,"UnexpectedEof","","",15,null],[11,"clone","xml","",0,{"inputs":[{"name":"self"}],"output":{"name":"parserconfig"}}],[11,"eq","","",0,{"inputs":[{"name":"self"},{"name":"parserconfig"}],"output":{"name":"bool"}}],[11,"ne","","",0,{"inputs":[{"name":"self"},{"name":"parserconfig"}],"output":{"name":"bool"}}],[11,"fmt","","",0,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"new","","Returns a new config with default values.",0,{"inputs":[],"output":{"name":"parserconfig"}}],[11,"create_reader","","Creates an XML reader with this configuration.",0,{"inputs":[{"name":"self"},{"name":"r"}],"output":{"name":"eventreader"}}],[11,"add_entity","","Adds a new entity mapping and returns an updated config object.",0,{"inputs":[{"name":"self"},{"name":"s"},{"name":"char"}],"output":{"name":"parserconfig"}}],[11,"default","","",0,{"inputs":[],"output":{"name":"parserconfig"}}],[11,"trim_whitespace","","Sets the field to the provided value and returns updated config object.",0,{"inputs":[{"name":"self"},{"name":"bool"}],"output":{"name":"parserconfig"}}],[11,"whitespace_to_characters","","Sets the field to the provided value and returns updated config object.",0,{"inputs":[{"name":"self"},{"name":"bool"}],"output":{"name":"parserconfig"}}],[11,"cdata_to_characters","","Sets the field to the provided value and returns updated config object.",0,{"inputs":[{"name":"self"},{"name":"bool"}],"output":{"name":"parserconfig"}}],[11,"ignore_comments","","Sets the field to the provided value and returns updated config object.",0,{"inputs":[{"name":"self"},{"name":"bool"}],"output":{"name":"parserconfig"}}],[11,"coalesce_characters","","Sets the field to the provided value and returns updated config object.",0,{"inputs":[{"name":"self"},{"name":"bool"}],"output":{"name":"parserconfig"}}],[11,"eq","xml::reader","",14,{"inputs":[{"name":"self"},{"name":"xmlevent"}],"output":{"name":"bool"}}],[11,"ne","","",14,{"inputs":[{"name":"self"},{"name":"xmlevent"}],"output":{"name":"bool"}}],[11,"clone","","",14,{"inputs":[{"name":"self"}],"output":{"name":"xmlevent"}}],[11,"fmt","","",14,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"as_writer_event","","Obtains a writer event from this reader event.",14,{"inputs":[{"name":"self"}],"output":{"name":"option"}}],[11,"fmt","","",15,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",16,{"inputs":[{"name":"self"}],"output":{"name":"error"}}],[11,"eq","","",16,{"inputs":[{"name":"self"},{"name":"error"}],"output":{"name":"bool"}}],[11,"ne","","",16,{"inputs":[{"name":"self"},{"name":"error"}],"output":{"name":"bool"}}],[11,"fmt","","",16,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",16,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"position","","",16,{"inputs":[{"name":"self"}],"output":{"name":"textposition"}}],[11,"msg","","Returns a reference to a message which is contained inside this error.",16,{"inputs":[{"name":"self"}],"output":{"name":"str"}}],[11,"kind","","",16,{"inputs":[{"name":"self"}],"output":{"name":"errorkind"}}],[11,"description","","",16,{"inputs":[{"name":"self"}],"output":{"name":"str"}}],[11,"from","","",16,null],[11,"from","","",16,{"inputs":[{"name":"charreaderror"}],"output":{"name":"self"}}],[11,"from","","",16,{"inputs":[{"name":"error"}],"output":{"name":"self"}}],[11,"clone","","",15,{"inputs":[{"name":"self"}],"output":{"name":"self"}}],[11,"eq","","",15,{"inputs":[{"name":"self"},{"name":"errorkind"}],"output":{"name":"bool"}}],[6,"Result","","A result type yielded by `XmlReader`.",null,null],[11,"new","","Creates a new reader, consuming the given stream.",17,{"inputs":[{"name":"r"}],"output":{"name":"eventreader"}}],[11,"new_with_config","","Creates a new reader with the provded configuration, consuming the given stream.",17,{"inputs":[{"name":"r"},{"name":"parserconfig"}],"output":{"name":"eventreader"}}],[11,"next","","Pulls and returns next XML event from the stream.",17,{"inputs":[{"name":"self"}],"output":{"name":"result"}}],[11,"source","","",17,{"inputs":[{"name":"self"}],"output":{"name":"r"}}],[11,"source_mut","","",17,{"inputs":[{"name":"self"}],"output":{"name":"r"}}],[11,"into_inner","","Unwraps this `EventReader`, returning the underlying reader.",17,{"inputs":[{"name":"self"}],"output":{"name":"r"}}],[11,"position","","Returns the position of the last event produced by the reader.",17,{"inputs":[{"name":"self"}],"output":{"name":"textposition"}}],[11,"into_iter","","",17,{"inputs":[{"name":"self"}],"output":{"name":"events"}}],[11,"into_inner","","Unwraps the iterator, returning the internal `EventReader`.",18,{"inputs":[{"name":"self"}],"output":{"name":"eventreader"}}],[11,"next","","",18,{"inputs":[{"name":"self"}],"output":{"name":"option"}}],[11,"from_str","","A convenience method to create an `XmlReader` from a string slice.",17,{"inputs":[{"name":"str"}],"output":{"name":"eventreader"}}],[0,"writer","xml","Contains high-level interface for an events-based XML emitter.",null,null],[3,"EmitterConfig","xml::writer","Emitter configuration structure.",null,null],[12,"line_separator","","Line separator used to separate lines in formatted output. Default is `\"\\n\"`.",1,null],[12,"indent_string","","A string which will be used for a single level of indentation. Default is `\"  \"` (two spaces).",1,null],[12,"perform_indent","","Whether or not the emitted document should be indented. Default is false.",1,null],[12,"perform_escaping","","Whether or not characters in output events will be escaped. Default is true.",1,null],[12,"write_document_declaration","","Whether or not to write XML document declaration at the beginning of a document. Default is true.",1,null],[12,"normalize_empty_elements","","Whether or not to convert elements with empty content to empty elements. Default is true.",1,null],[12,"cdata_to_characters","","Whether or not to emit CDATA events as plain characters. Default is false.",1,null],[12,"keep_element_names_stack","","Whether or not to keep element names to support `EndElement` events without explicit names. Default is true.",1,null],[12,"autopad_comments","","Whether or not to automatically insert leading and trailing spaces in emitted comments, if necessary. Default is true.",1,null],[3,"EventWriter","","A wrapper around an `std::io::Write` instance which emits XML document according to provided events.",null,null],[4,"Error","","An error which may be returned by `XmlWriter` when writing XML events.",null,null],[13,"Io","","An I/O error occured in the underlying `Write` instance.",19,null],[13,"DocumentStartAlreadyEmitted","","Document declaration has already been written to the output stream.",19,null],[13,"LastElementNameNotAvailable","","The name of the last opening element is not available.",19,null],[13,"EndElementNameIsNotEqualToLastStartElementName","","The name of the last opening element is not equal to the name of the provided closing element.",19,null],[13,"EndElementNameIsNotSpecified","","End element name is not specified when it is needed, for example, when automatic closing is not enabled in configuration.",19,null],[11,"fmt","","",19,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"from","","",19,{"inputs":[{"name":"error"}],"output":{"name":"emittererror"}}],[11,"fmt","","",19,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"description","","",19,{"inputs":[{"name":"self"}],"output":{"name":"str"}}],[11,"clone","xml","",1,{"inputs":[{"name":"self"}],"output":{"name":"emitterconfig"}}],[11,"eq","","",1,{"inputs":[{"name":"self"},{"name":"emitterconfig"}],"output":{"name":"bool"}}],[11,"ne","","",1,{"inputs":[{"name":"self"},{"name":"emitterconfig"}],"output":{"name":"bool"}}],[11,"fmt","","",1,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"new","","Creates an emitter configuration with default values.",1,{"inputs":[],"output":{"name":"emitterconfig"}}],[11,"create_writer","","Creates an XML writer with this configuration.",1,{"inputs":[{"name":"self"},{"name":"w"}],"output":{"name":"eventwriter"}}],[11,"default","","",1,{"inputs":[],"output":{"name":"emitterconfig"}}],[11,"line_separator","","Sets the field to the provided value and returns updated config object.",1,{"inputs":[{"name":"self"},{"name":"t"}],"output":{"name":"emitterconfig"}}],[11,"indent_string","","Sets the field to the provided value and returns updated config object.",1,{"inputs":[{"name":"self"},{"name":"t"}],"output":{"name":"emitterconfig"}}],[11,"perform_indent","","Sets the field to the provided value and returns updated config object.",1,{"inputs":[{"name":"self"},{"name":"bool"}],"output":{"name":"emitterconfig"}}],[11,"write_document_declaration","","Sets the field to the provided value and returns updated config object.",1,{"inputs":[{"name":"self"},{"name":"bool"}],"output":{"name":"emitterconfig"}}],[11,"normalize_empty_elements","","Sets the field to the provided value and returns updated config object.",1,{"inputs":[{"name":"self"},{"name":"bool"}],"output":{"name":"emitterconfig"}}],[11,"cdata_to_characters","","Sets the field to the provided value and returns updated config object.",1,{"inputs":[{"name":"self"},{"name":"bool"}],"output":{"name":"emitterconfig"}}],[11,"keep_element_names_stack","","Sets the field to the provided value and returns updated config object.",1,{"inputs":[{"name":"self"},{"name":"bool"}],"output":{"name":"emitterconfig"}}],[11,"autopad_comments","","Sets the field to the provided value and returns updated config object.",1,{"inputs":[{"name":"self"},{"name":"bool"}],"output":{"name":"emitterconfig"}}],[0,"events","xml::writer","Contains `XmlEvent` datatype, instances of which are consumed by the writer.",null,null],[3,"EndElementBuilder","xml::writer::events","",null,null],[3,"StartElementBuilder","","A builder for a starting element event.",null,null],[4,"XmlEvent","","A part of an XML output stream.",null,null],[13,"StartDocument","","Corresponds to XML document declaration.",20,null],[12,"version","xml::writer::events::XmlEvent","XML version.",20,null],[12,"encoding","","XML document encoding.",20,null],[12,"standalone","","XML standalone declaration.",20,null],[13,"ProcessingInstruction","xml::writer::events","Denotes an XML processing instruction.",20,null],[12,"name","xml::writer::events::XmlEvent","Processing instruction target.",20,null],[12,"data","","Processing instruction content.",20,null],[13,"StartElement","xml::writer::events","Denotes a beginning of an XML element.",20,null],[12,"name","xml::writer::events::XmlEvent","Qualified name of the element.",20,null],[12,"attributes","","A list of attributes associated with the element.",20,null],[12,"namespace","","Contents of the namespace mapping at this point of the document.",20,null],[13,"EndElement","xml::writer::events","Denotes an end of an XML element.",20,null],[12,"name","xml::writer::events::XmlEvent","Optional qualified name of the element.",20,null],[13,"CData","xml::writer::events","Denotes CDATA content.",20,null],[13,"Comment","","Denotes a comment.",20,null],[13,"Characters","","Denotes character data outside of tags.",20,null],[11,"fmt","","",20,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"processing_instruction","","Returns an writer event for a processing instruction.",20,{"inputs":[{"name":"str"},{"name":"option"}],"output":{"name":"xmlevent"}}],[11,"start_element","","Returns a builder for a starting element.",20,{"inputs":[{"name":"s"}],"output":{"name":"startelementbuilder"}}],[11,"end_element","","Returns a builder for an closing element.",20,{"inputs":[],"output":{"name":"endelementbuilder"}}],[11,"cdata","","Returns a CDATA event.",20,{"inputs":[{"name":"str"}],"output":{"name":"xmlevent"}}],[11,"characters","","Returns a regular characters (PCDATA) event.",20,{"inputs":[{"name":"str"}],"output":{"name":"xmlevent"}}],[11,"comment","","Returns a comment event.",20,{"inputs":[{"name":"str"}],"output":{"name":"xmlevent"}}],[11,"from","","",20,{"inputs":[{"name":"str"}],"output":{"name":"xmlevent"}}],[11,"name","","Sets the name of this closing element.",21,{"inputs":[{"name":"self"},{"name":"n"}],"output":{"name":"endelementbuilder"}}],[11,"from","","",20,{"inputs":[{"name":"endelementbuilder"}],"output":{"name":"xmlevent"}}],[11,"attr","","Sets an attribute value of this element to the given string.",22,{"inputs":[{"name":"self"},{"name":"n"},{"name":"str"}],"output":{"name":"startelementbuilder"}}],[11,"ns","","Adds a namespace to the current namespace context.",22,{"inputs":[{"name":"self"},{"name":"s1"},{"name":"s2"}],"output":{"name":"startelementbuilder"}}],[11,"default_ns","","Adds a default namespace mapping to the current namespace context.",22,{"inputs":[{"name":"self"},{"name":"s"}],"output":{"name":"startelementbuilder"}}],[11,"from","","",20,{"inputs":[{"name":"startelementbuilder"}],"output":{"name":"xmlevent"}}],[6,"Result","xml::writer","A result type yielded by `XmlWriter`.",null,null],[11,"new","","Creates a new `EventWriter` out of an `std::io::Write` instance using the default configuration.",23,{"inputs":[{"name":"w"}],"output":{"name":"eventwriter"}}],[11,"new_with_config","","Creates a new `EventWriter` out of an `std::io::Write` instance using the provided configuration.",23,{"inputs":[{"name":"w"},{"name":"emitterconfig"}],"output":{"name":"eventwriter"}}],[11,"write","","Writes the next piece of XML document according to the provided event.",23,{"inputs":[{"name":"self"},{"name":"e"}],"output":{"name":"result"}}],[11,"into_inner","","Unwraps this `EventWriter`, returning the underlying writer.",23,{"inputs":[{"name":"self"}],"output":{"name":"w"}}]],"paths":[[3,"ParserConfig"],[3,"EmitterConfig"],[3,"Name"],[3,"OwnedName"],[3,"ReprDisplay"],[3,"Attribute"],[3,"OwnedAttribute"],[3,"TextPosition"],[4,"XmlVersion"],[8,"Position"],[3,"Namespace"],[3,"NamespaceStack"],[3,"NamespaceStackMappings"],[3,"CheckedTarget"],[4,"XmlEvent"],[4,"ErrorKind"],[3,"Error"],[3,"EventReader"],[3,"Events"],[4,"Error"],[4,"XmlEvent"],[3,"EndElementBuilder"],[3,"StartElementBuilder"],[3,"EventWriter"]]};
searchIndex["xml_analyze"] = {"doc":"","items":[],"paths":[]};
initSearch(searchIndex);

pragma solidity ^0.4.15;

contract Message {

    struct Convo {
        uint256 id;
        address creator;
        string subject;
        string message;
        address[] viewers;
        uint viewerCount;
        uint time;
        mapping(address => bool) viewer;
    }

    uint public convo_count;
    mapping(address => uint[]) public viewable_convos;
    mapping(address => Convo[]) public myConvos;

    Convo[] public convos;

    constructor() public {
        convos.push(Convo({
            id: 0,
            creator: msg.sender,
            subject: "Greetings",
            message: "Hello World!",
            viewers: new address[](0),
            viewerCount: 0,
            time: now
        }));
    }

    function createConvo(address[] memory viewers, string memory subject, string memory message) public {
        uint viewerCount = viewers.length;

        Convo memory newConvo = Convo({
            id: convo_count + 1,
            creator: msg.sender,
            subject: subject,
            message: message,
            viewers: viewers,
            viewerCount: viewerCount,
            time: now
        });

        convos.push(newConvo);
        // Increments the number of conversations by one (also index of dynamic array)
        convo_count++;

        Convo storage convo = convos[convo_count];
        // Mapping the permission of conversation creator to his address

        convo.viewer[msg.sender] = true;
        //
        viewable_convos[msg.sender].push(convo_count);

        for (uint i=0; i<viewers.length; i++) {
            // Mapping permissions of each viewer to their respective address
            convo.viewer[viewers[i]] = true;
            //
            if (!(viewers[i] == msg.sender)) {
                viewable_convos[viewers[i]].push(convo_count);
            }
        }

    myConvos[msg.sender].push(newConvo);

    }

    function getViewable_Convos() public view returns(uint[] memory) {
        return viewable_convos[msg.sender];
    }

    // Need a function to return convos from the indexed viewable_convos mapping

   /*
    function returnMyConvos() public returns (string memory) {

        uint[] memory myConvos = getViewable_Convos();
        uint[] memory my_viewable_convos = viewable_convos[msg.sender];
        bool isEqual;

        assembly {
         isEqual := eq(myConvos, my_viewable_convos)
        }
        require(isEqual);
        return "success";
    }
    */

    function returnMyConvos() public view returns (address[] memory, uint[] memory) {
        address[] memory addrs = new address[](viewable_convos[msg.sender].length);
        uint[] memory times = new uint[](viewable_convos[msg.sender].length);

        for (uint i = 0; i < viewable_convos[msg.sender].length; i++) {
            Convo storage convo = convos[viewable_convos[msg.sender][i]];
            addrs[i] = convo.creator;
            times[i] = convo.time;
        }

        return (addrs, times);
    }


}

import { gql } from "apollo-server";

const types = gql`
    type User {
        userId: ID!
        username: String!
        balance: Number!
        # inventory: Inventory
    }

    interface GameData {
        gameId: ID!
        name: String!
    }

    type BoxingKingGameData implements GameData {
        gameId: ID!
        name: String!
        cards: [BoxingKingGameCard!]!
        shop: [BoxingKingCardPack!]
    }

    type GameRoom {
        gameRoomId: ID!
        startTime: Date!
        endTime: Date
        players: [User]
    }
`;

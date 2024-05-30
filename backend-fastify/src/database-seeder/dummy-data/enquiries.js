import {
    EnquiryTopic
} from "../../enums/enquiries.js";

const Content1 = "<h3>Dear Community,</h3><p>&nbsp;</p><p>I am writing this letter to enquire about <strong>WASH AND LAUNDRY</strong>. company, I want to ask you about costs of washing and the quality of their services. Is it worth it ? </p>";
const Content2 = "<h3>Dear Community,</h3><p>&nbsp;</p><p>I am writing this letter to enquire about <strong>The nearset Ambassador</strong>. I want to validate my stay in France and I don't know how !  </p>";
const Content3 = "<h3>Dear Community,</h3><p>&nbsp;</p><p>I am writing this letter to enquire about <strong>Payment</strong> in the storage facility, what is the cost and the procedures </p>";
const Content4 = "<h3>Dear Community,</h3><p>&nbsp;</p><p>I am writing this letter to enquire about <strong>Tutoring</strong>. In fact, my daughter has 12 yeas old and I want an educational support establishment with quality to help here improve her level </p>";
export const enquiries = [
    {
        enquiry_id: "e01",
        content: Content1,
        email: "test@email.com",
        title: "LAUNDRY Dummy Question",
        topic: EnquiryTopic.info,
        read: false,
        property: {
            name: "WASH AND DRY LAUNDRY",
            property_id: "106ab526-72af-4446-9550-998a48d98c0c"
        },
        users: {
            from: {
                user_id: "u04",
                keep: true
            },
            to: {
                user_id: "u01",
                keep: true
            }
        },
        createdAt: "2022-08-25T04:08:49.642Z",
        updatedAt: "2022-08-25T04:08:49.642Z"
    },
    {
        enquiry_id: "e02",
        content: Content1,
        email: "test@email.com",
        title: "Question 2[XXX]",
        topic: EnquiryTopic.info,
        read: false,
        property: {
            name: "WASH AND DRY LAUNDRY",
            property_id: "106ab526-72af-4446-9550-998a48d98c0c"
        },
        users: {
            from: {
                user_id: "u04",
                keep: true
            },
            to: {
                user_id: "u01",
                keep: true
            }
        },
        createdAt: "2022-08-25T04:08:49.642Z",
        updatedAt: "2022-08-25T04:08:49.642Z"
    },
    {
        enquiry_id: "e03",
        content: Content1,
        email: "test@email.com",
        title: "Question about [XXX]",
        topic: EnquiryTopic.info,
        read: false,
        property: {
            name: "High Land area for Sale ",
            property_id: "b7973ec5-2931-4040-a846-a0271153718d"
        },
        users: {
            from: {
                user_id: "u01",
                keep: true
            },
            to: {
                user_id: "u02",
                keep: true
            }
        },
        createdAt: "2022-09-25T04:09:49.642Z",
        updatedAt: "2022-09-25T04:09:49.642Z"
    },
    {
        enquiry_id: "e04",
        content: Content2,
        email: "test@email.com",
        title: "Question about the nearest Ambassador [XXX]",
        topic: EnquiryTopic.ambassador,
        read: false,
        property: {
            name: "Photo Studio - Dummy",
            property_id: "4b58df58-3e8d-453e-9802-7537a514453e"
        },
        users: {
            from: {
                user_id: "u01",
                keep: true
            },
            to: {
                user_id: "u02",
                keep: true
            }
        },
        createdAt: "2022-09-23T04:09:49.642Z",
        updatedAt: "2022-09-23T04:09:49.642Z"
    },
    {
        enquiry_id: "e05",
        content: Content3,
        email: "test@email.com",
        title: " Question about payments in storage facility",
        topic: EnquiryTopic.payment,
        read: false,
        property: {
            name: "Storage Facility",
            property_id: "fef95dc0-0131-46b4-aa63-09f19898a0c8"
        },
        users: {
            from: {
                user_id: "u01",
                keep: true
            },
            to: {
                user_id: "u03",
                keep: true
            }
        },
        createdAt: "2022-07-23T01:09:49.642Z",
        updatedAt: "2022-07-23T01:09:49.642Z"
    },
    {
        enquiry_id: "e06",
        content: Content4,
        email: "test@email.com",
        title: " Question about tutoring ",
        topic: EnquiryTopic.tutoring,
        read: false,
        property: {
            name: "College Paul Eluard",
            property_id: "fef95dc0-0131-46b4-aa63-09f19898a0c8"
        },
        users: {
            from: {
                user_id: "u01",
                keep: true
            },
            to: {
                user_id: "u03",
                keep: true
            }
        },
        createdAt: "2022-07-23T01:09:49.642Z",
        updatedAt: "2022-07-23T01:09:49.642Z"
    }
];
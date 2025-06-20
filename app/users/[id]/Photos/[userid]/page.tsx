// // app/users/[id]/Photos/[userid]/page.tsx
// interface PageProps {
//   params: { id: string; userid: string }; // params are strings
// }

// export default function Page({ params: { id, userid } }: PageProps) {
//   return (
//     <div>
//       User detail Page {id}, {userid}
//     </div>
//   );
// }

// app/users/[id]/Photos/[userid]/page.tsx

interface PageProps {
  params: Promise<{ id: string; userid: string }>;
}

export default async function Page({ params }: PageProps) {
  const resolvedParams = await params;
  const { id, userid } = resolvedParams;

  return (
    <div>
      User detail Page {id}, {userid}
    </div>
  );
}

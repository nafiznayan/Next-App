const UserIDPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  let userId = (await params).id;

  return <div>UserID: {userId}</div>;
};

export default UserIDPage;

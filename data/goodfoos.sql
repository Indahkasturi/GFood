PGDMP          
            |            goodfood    16.4    16.4 )    �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    82617    goodfood    DATABASE        CREATE DATABASE goodfood WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'English_Indonesia.1252';
    DROP DATABASE goodfood;
                postgres    false                        2615    2200    public    SCHEMA        CREATE SCHEMA public;
    DROP SCHEMA public;
                pg_database_owner    false            �           0    0    SCHEMA public    COMMENT     6   COMMENT ON SCHEMA public IS 'standard public schema';
                   pg_database_owner    false    4            �            1259    82647    Products    TABLE       CREATE TABLE public."Products" (
    id integer NOT NULL,
    name character varying(255),
    price integer,
    "imageURL" character varying(255),
    "UserId" integer,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
    DROP TABLE public."Products";
       public         heap    postgres    false    4            �            1259    82646    Products_id_seq    SEQUENCE     �   CREATE SEQUENCE public."Products_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public."Products_id_seq";
       public          postgres    false    221    4            �           0    0    Products_id_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public."Products_id_seq" OWNED BY public."Products".id;
          public          postgres    false    220            �            1259    82633    Profiles    TABLE       CREATE TABLE public."Profiles" (
    id integer NOT NULL,
    name character varying(255),
    address character varying(255),
    age integer,
    "UserId" integer,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
    DROP TABLE public."Profiles";
       public         heap    postgres    false    4            �            1259    82632    Profiles_id_seq    SEQUENCE     �   CREATE SEQUENCE public."Profiles_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public."Profiles_id_seq";
       public          postgres    false    4    219            �           0    0    Profiles_id_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public."Profiles_id_seq" OWNED BY public."Profiles".id;
          public          postgres    false    218            �            1259    82618    SequelizeMeta    TABLE     R   CREATE TABLE public."SequelizeMeta" (
    name character varying(255) NOT NULL
);
 #   DROP TABLE public."SequelizeMeta";
       public         heap    postgres    false    4            �            1259    82661 
   UserOrders    TABLE     �   CREATE TABLE public."UserOrders" (
    id integer NOT NULL,
    "UserId" integer,
    "ProductId" integer,
    quantity integer,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
     DROP TABLE public."UserOrders";
       public         heap    postgres    false    4            �            1259    82660    UserOrders_id_seq    SEQUENCE     �   CREATE SEQUENCE public."UserOrders_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 *   DROP SEQUENCE public."UserOrders_id_seq";
       public          postgres    false    223    4            �           0    0    UserOrders_id_seq    SEQUENCE OWNED BY     K   ALTER SEQUENCE public."UserOrders_id_seq" OWNED BY public."UserOrders".id;
          public          postgres    false    222            �            1259    82624    Users    TABLE       CREATE TABLE public."Users" (
    id integer NOT NULL,
    email character varying(255),
    password character varying(255),
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    role character varying(255)
);
    DROP TABLE public."Users";
       public         heap    postgres    false    4            �            1259    82623    Users_id_seq    SEQUENCE     �   CREATE SEQUENCE public."Users_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public."Users_id_seq";
       public          postgres    false    217    4            �           0    0    Users_id_seq    SEQUENCE OWNED BY     A   ALTER SEQUENCE public."Users_id_seq" OWNED BY public."Users".id;
          public          postgres    false    216            /           2604    82650    Products id    DEFAULT     n   ALTER TABLE ONLY public."Products" ALTER COLUMN id SET DEFAULT nextval('public."Products_id_seq"'::regclass);
 <   ALTER TABLE public."Products" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    221    220    221            .           2604    82636    Profiles id    DEFAULT     n   ALTER TABLE ONLY public."Profiles" ALTER COLUMN id SET DEFAULT nextval('public."Profiles_id_seq"'::regclass);
 <   ALTER TABLE public."Profiles" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    219    218    219            0           2604    82664    UserOrders id    DEFAULT     r   ALTER TABLE ONLY public."UserOrders" ALTER COLUMN id SET DEFAULT nextval('public."UserOrders_id_seq"'::regclass);
 >   ALTER TABLE public."UserOrders" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    223    222    223            -           2604    82627    Users id    DEFAULT     h   ALTER TABLE ONLY public."Users" ALTER COLUMN id SET DEFAULT nextval('public."Users_id_seq"'::regclass);
 9   ALTER TABLE public."Users" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    216    217    217            �          0    82647    Products 
   TABLE DATA           e   COPY public."Products" (id, name, price, "imageURL", "UserId", "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    221   G.       �          0    82633    Profiles 
   TABLE DATA           `   COPY public."Profiles" (id, name, address, age, "UserId", "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    219   �/       �          0    82618    SequelizeMeta 
   TABLE DATA           /   COPY public."SequelizeMeta" (name) FROM stdin;
    public          postgres    false    215   -0       �          0    82661 
   UserOrders 
   TABLE DATA           e   COPY public."UserOrders" (id, "UserId", "ProductId", quantity, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    223   �0       �          0    82624    Users 
   TABLE DATA           V   COPY public."Users" (id, email, password, "createdAt", "updatedAt", role) FROM stdin;
    public          postgres    false    217   1       �           0    0    Products_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public."Products_id_seq"', 4, true);
          public          postgres    false    220            �           0    0    Profiles_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public."Profiles_id_seq"', 4, true);
          public          postgres    false    218            �           0    0    UserOrders_id_seq    SEQUENCE SET     A   SELECT pg_catalog.setval('public."UserOrders_id_seq"', 4, true);
          public          postgres    false    222            �           0    0    Users_id_seq    SEQUENCE SET     <   SELECT pg_catalog.setval('public."Users_id_seq"', 4, true);
          public          postgres    false    216            8           2606    82654    Products Products_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public."Products"
    ADD CONSTRAINT "Products_pkey" PRIMARY KEY (id);
 D   ALTER TABLE ONLY public."Products" DROP CONSTRAINT "Products_pkey";
       public            postgres    false    221            6           2606    82640    Profiles Profiles_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public."Profiles"
    ADD CONSTRAINT "Profiles_pkey" PRIMARY KEY (id);
 D   ALTER TABLE ONLY public."Profiles" DROP CONSTRAINT "Profiles_pkey";
       public            postgres    false    219            2           2606    82622     SequelizeMeta SequelizeMeta_pkey 
   CONSTRAINT     d   ALTER TABLE ONLY public."SequelizeMeta"
    ADD CONSTRAINT "SequelizeMeta_pkey" PRIMARY KEY (name);
 N   ALTER TABLE ONLY public."SequelizeMeta" DROP CONSTRAINT "SequelizeMeta_pkey";
       public            postgres    false    215            :           2606    82666    UserOrders UserOrders_pkey 
   CONSTRAINT     \   ALTER TABLE ONLY public."UserOrders"
    ADD CONSTRAINT "UserOrders_pkey" PRIMARY KEY (id);
 H   ALTER TABLE ONLY public."UserOrders" DROP CONSTRAINT "UserOrders_pkey";
       public            postgres    false    223            4           2606    82631    Users Users_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_pkey" PRIMARY KEY (id);
 >   ALTER TABLE ONLY public."Users" DROP CONSTRAINT "Users_pkey";
       public            postgres    false    217            <           2606    82655    Products Products_UserId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."Products"
    ADD CONSTRAINT "Products_UserId_fkey" FOREIGN KEY ("UserId") REFERENCES public."Users"(id);
 K   ALTER TABLE ONLY public."Products" DROP CONSTRAINT "Products_UserId_fkey";
       public          postgres    false    4660    221    217            ;           2606    82641    Profiles Profiles_UserId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."Profiles"
    ADD CONSTRAINT "Profiles_UserId_fkey" FOREIGN KEY ("UserId") REFERENCES public."Users"(id);
 K   ALTER TABLE ONLY public."Profiles" DROP CONSTRAINT "Profiles_UserId_fkey";
       public          postgres    false    217    4660    219            =           2606    82672 $   UserOrders UserOrders_ProductId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."UserOrders"
    ADD CONSTRAINT "UserOrders_ProductId_fkey" FOREIGN KEY ("ProductId") REFERENCES public."Products"(id);
 R   ALTER TABLE ONLY public."UserOrders" DROP CONSTRAINT "UserOrders_ProductId_fkey";
       public          postgres    false    223    221    4664            >           2606    82667 !   UserOrders UserOrders_UserId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."UserOrders"
    ADD CONSTRAINT "UserOrders_UserId_fkey" FOREIGN KEY ("UserId") REFERENCES public."Users"(id);
 O   ALTER TABLE ONLY public."UserOrders" DROP CONSTRAINT "UserOrders_UserId_fkey";
       public          postgres    false    223    217    4660            �   K  x�ŒMK1���_�]��I�+��B� *�D�t7]��&a���_o�^��a��}��HKמ5�W��=yo]	p8�U׆�+��u�*];���64p��2�+�ao;#k�24����L̳�I����C>t��d��xc��(K��a��8��?�F,Z��F��_=K甏�fg�{w]��:X�>ޥ������,�Zh�?�o��cH���Rp>d�~��!��Zz	��xs�B@
�f�c"�B%���x�Z��/�p��(�������_��G{��x��}����������N6/���ʢ���T &�q����q��;<ģ��v��      �   {   x���!�0`}�����BAN�77s�&H�<���P�!j�\��N��K�L����L�z��־�E*��p�.Ƌ�N*���:��4o��B/ q�����и@"B��"Mv,|�~�{��9�'H�      �   g   x�]�K
� E��EQ{j�%�����D����9\��d��#M��ߑׂ$���CA�n��)�O���>�!�T�u��3X���X��ܹ�.�������G�1G      �   Z   x�}��� k{���m�10K��#� �;����(��Q��KuX�d�n��u6���z����X)c�p�n��t���J�f� b�%�      �   �   x�3�tJLJL/M/-vH�M���K���N�LtN�N-�4202�5��54T02�22�2��377�60�'嘒���eę�����d����������qs攦�UB2�����ȐcM832K�--�	�0EA���� �T�     